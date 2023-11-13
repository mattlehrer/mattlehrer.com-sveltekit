import { XMLParser } from 'fast-xml-parser';
import type { PodcastFeed } from '$lib/types';

export const parseOpml = (opml: string) => {
	const parser = new XMLParser({
		ignoreDeclaration: true,
		ignoreAttributes: false,
		parseAttributeValue: true,
		allowBooleanAttributes: true,
		attributeNamePrefix: '',
		updateTag(tagName, jpath, attrs) {
			if (attrs['progress']) {
				delete attrs['progress'];
			}

			if (tagName === 'outline' && attrs['text'] === 'playlists') {
				return false;
			}

			if (tagName === 'outline' && attrs['text'] === 'feeds') {
				return 'feeds';
			}

			if (tagName === 'outline' && attrs['type'] === 'podcast-episode') {
				return 'episodes';
			}

			return true;
		},
	});
	const json = parser.parse(opml);
	return json;
};

export const getRecentSubscriptions = (feedData: PodcastFeed[], numberToReturn: number) => {
	return feedData
		.filter((feed) => feed.subscribed === 1)
		.map((feed) => {
			const dateAdded = new Date(feed.overcastAddedDate);
			return {
				overcastId: feed.overcastId,
				title: feed.title,
				htmlUrl: feed.htmlUrl,
				xmlUrl: feed.xmlUrl,
				dateAdded: dateAdded,
			};
		})
		.sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime())
		.slice(0, numberToReturn);
};

export const getRecentRecommendations = (feedData: PodcastFeed[], numberToReturn: number) => {
	return (
		feedData
			.flatMap((feed) => {
				if (Array.isArray(feed.episodes))
					return feed.episodes.map((episode) => ({
						...episode,
						overcastFeedId: feed.overcastId,
						feedTitle: feed.title,
					}));
				else return [];
			})
			// episode can be undefined for podcasts with no episodes
			.filter((episode) => episode?.userRecommendedDate)
			.map((episode) => {
				const dateRecommended = new Date(episode.userRecommendedDate!);
				return {
					...episode,
					dateRecommended: dateRecommended,
				};
			})
			.sort((a, b) => b.dateRecommended.getTime() - a.dateRecommended.getTime())
			.slice(0, numberToReturn)
	);
};

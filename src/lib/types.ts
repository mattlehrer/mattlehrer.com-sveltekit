import type { getRecentRecommendations, getRecentSubscriptions } from './overcast/parse';

export type Categories = string;

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type BookRating = {
	id: string;
	posted: string;
	rating: number;
	title: string;
	subtitle: string;
	description?: string;
	authors: string[];
	reviewTitle?: string;
	reviewContent?: string;
	cover?: string;
};

export type BookwyrmActivity =
	| {
			id: string;
			type: 'Note';
			published: string;
			attributedTo: string;
			content: string;
			to: string[];
			cc: string[];
			replies: {
				id: string;
				type: 'OrderedCollection';
				totalItems: number;
				first: string;
				last: string;
				'@context': string;
			};
			tag: [
				{
					type: 'Edition';
					href: string;
					name: string;
				},
			];
			attachment: [
				{
					type: 'Document';
					url: string;
					name: string;
					'@context': string;
				},
			];
			inReplyToBook: string;
			sensitive: boolean;
			rating?: number;
			'@context': string;
	  }
	| {
			id: string;
			type: 'Article';
			published: string;
			attributedTo: string;
			content: string;
			to: string[];
			cc: string[];
			replies: {
				id: string;
				type: 'OrderedCollection';
				totalItems: number;
				first: string;
				last: string;
				'@context': string;
			};
			tag: [
				{
					type: 'Edition';
					href: string;
					name: string;
				},
			];
			attachment: [
				{
					type: 'Document';
					url: string;
					name: string;
					'@context': string;
				},
			];
			inReplyToBook: string;
			name: string;
			rating: number;
			'@context': string;
	  };

export type BookwyrmCollection = {
	id: string;
	type: 'OrderedCollectionPage';
	partOf: string;
	orderedItems: Array<BookwyrmActivity>;
	next: string;
	'@context': string;
};

export type BookwyrmBook =
	| {
			id: string;
			type: 'Edition';
			openlibraryKey: string;
			librarythingKey: string;
			links: unknown;
			fileLinks: [];
			title: string;
			subtitle: string;
			description: string;
			languages: string[];
			series: string;
			seriesNumber: string;
			subjects: string[];
			subjectPlaces: [];
			authors: string[];
			firstPublishedDate: string;
			publishedDate: string;
			cover?: {
				type: 'Document';
				url: string;
				name: string;
				'@context': 'https://www.w3.org/ns/activitystreams';
			};
			work: string;
			isbn10: string;
			isbn13: string;
			oclcNumber: string;
			pages: number;
			physicalFormat: string;
			physicalFormatDetail: string;
			publishers: string[];
			editionRank: number;
			'@context': 'https://www.w3.org/ns/activitystreams';
	  }
	| {
			id: string;
			type: 'Work';
			openlibraryKey: string;
			librarythingKey: string;
			links: unknown;
			fileLinks: [];
			title: string;
			subtitle: string;
			description: string;
			languages: string[];
			series: string;
			seriesNumber: string;
			subjects: string[];
			subjectPlaces: [];
			authors: string[];
			firstPublishedDate: string;
			publishedDate: string;
			cover: {
				type: 'Document';
				url: string;
				name: string;
				'@context': 'https://www.w3.org/ns/activitystreams';
			};
			lccn: string;
			editions: string;
			'@context': 'https://www.w3.org/ns/activitystreams';
	  };

export type BookwyrmAuthor = {
	id: string;
	type: string;
	openlibraryKey: string;
	librarythingKey: string;
	goodreadsKey: string;
	links: unknown;
	fileLinks: unknown;
	name: string;
	aliases: [];
	bio: string;
	wikipediaLink: string;
	website: string;
	'@context': 'https://www.w3.org/ns/activitystreams';
};

export type BookwyrmOutbox = {
	id: string;
	type: 'OrderedCollectionPage';
	partOf: 'https://bookwyrm.social/user/mattlehrer/outbox';
	orderedItems: BookwyrmActivity[];
	next: string;
	'@context': string;
};

export type PodcastFeed = {
	episodes: OvercastEpisode[] | OvercastEpisode;
	type: 'rss';
	overcastId: number;
	text: string;
	title: string;
	xmlUrl: string;
	htmlUrl: string;
	overcastAddedDate: string;
	subscribed: number;
	notifications: number;
};

export type OvercastEpisode = {
	type: 'podcast-episode';
	pubDate: string;
	title: string;
	url: string;
	overcastUrl: string;
	enclosureUrl: string;
	userUpdatedDate: string;
	userRecommendedDate?: string;
	userDeleted?: number;
	played?: number;
};

export type EpisodeRecommendations = ReturnType<typeof getRecentRecommendations>;
export type EpisodeRecommendation = EpisodeRecommendations[number];

export type FeedSubscriptions = ReturnType<typeof getRecentSubscriptions>;
export type FeedSubscription = FeedSubscriptions[number];

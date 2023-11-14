import { json, type RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET = (async () => {
	return json(
		{
			subject: 'acct:mattlehrer@definitely.social',
			aliases: [
				'https://definitely.social/@mattlehrer',
				'https://definitely.social/users/mattlehrer',
			],
			links: [
				{
					rel: 'http://webfinger.net/rel/profile-page',
					type: 'text/html',
					href: 'https://definitely.social/@mattlehrer',
				},
				{
					rel: 'self',
					type: 'application/activity+json',
					href: 'https://definitely.social/users/mattlehrer',
				},
				{
					rel: 'http://ostatus.org/schema/1.0/subscribe',
					template: 'https://definitely.social/authorize_interaction?uri={uri}',
				},
			],
		},
		{
			headers: {
				'content-type': 'application/jrd+json',
			},
		},
	);
}) satisfies RequestHandler;

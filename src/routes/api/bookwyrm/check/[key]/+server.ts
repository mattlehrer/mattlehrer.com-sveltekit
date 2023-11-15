import type { BookwyrmOutbox } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { CF_BOOKWYRM_DEPLOY_HOOK, CHECK_KEY } from '$env/static/private';

export const prerender = false;

export const GET = (async ({ platform, params }) => {
	if (!params.key || params.key !== CHECK_KEY) {
		return new Response(undefined, { status: 400 });
	}
	/**
	 *
	 * check first page of bookwyrm outbox
	 * get most recent rating or review time
	 * go to next page if necessary
	 * get most recent rating or review time from KV
	 * compare
	 * if different, save to KV and send POST to CF build hook
	 *
	 */
	const url = `https://bookwyrm.social/user/mattlehrer/outbox?page=1`;
	const response = await fetch(url, {
		headers: {
			Accept: 'application/json',
		},
	});
	if (!response.ok) {
		// failure but not this server's fault
		return new Response(undefined, { status: 200 });
	}
	try {
		let { orderedItems: items, next } = (await response.json()) as BookwyrmOutbox;

		let mostRecentRating = undefined;
		let i = 0;

		while (!mostRecentRating) {
			if (i < items.length) {
				if (items[i].rating) {
					mostRecentRating = items[i].published;
				}
				i++;
			} else {
				const response = await fetch(next, {
					headers: {
						Accept: 'application/json',
					},
				});
				({ orderedItems: items, next } = (await response.json()) as BookwyrmOutbox);
				i = 0;
			}
		}

		const mostRecentKnownRating = await platform?.env.BOOKWYRM_KV.get('mostRecentRating');

		console.log({ mostRecentRating, mostRecentKnownRating });

		if (!mostRecentKnownRating || mostRecentKnownRating !== mostRecentRating) {
			await platform?.env.BOOKWYRM_KV.put('mostRecentRating', mostRecentRating);

			const res = await fetch(CF_BOOKWYRM_DEPLOY_HOOK, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({}),
			});
			console.log(res);
		}
	} catch (error) {
		console.error(error);
		return new Response(undefined, { status: 500 });
	}

	return new Response(undefined, { status: 200 });
}) satisfies RequestHandler;

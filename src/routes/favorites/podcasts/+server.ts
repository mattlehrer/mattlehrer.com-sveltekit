import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = 'auto';

export const GET: RequestHandler = async () => {
	throw redirect(301, '/podcast-listening');
};

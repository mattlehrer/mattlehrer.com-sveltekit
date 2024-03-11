import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = 'auto';

export const GET: RequestHandler = async () => {
	redirect(301, '/reading/books');
	return json({});
};

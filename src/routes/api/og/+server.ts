import puppeteer from '@cloudflare/puppeteer';
import type { RequestHandler } from './$types';

const width = 1200;
const height = 630;

export const GET: RequestHandler = async ({ env, url }) => {
	const title = url.searchParams.get('title') ?? undefined;
	const browser = await puppeteer.launch({
		fetch: env.MY_BROWSER,
	});
	const page = await browser.newPage();
	await page.setViewport({ width, height, deviceScaleFactor: 1.5 });

	await page.goto(url + '/og?title=' + title);
	const img = (await page.screenshot({ type: 'png' })) as Buffer;
	await browser.close();

	return new Response(img, {
		headers: {
			'content-type': 'image/png',
		},
	});
};

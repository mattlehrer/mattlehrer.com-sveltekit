import puppeteer from '@cloudflare/puppeteer';
import type { RequestHandler } from './$types';

const width = 1200;
const height = 630;

export const GET: RequestHandler = async ({ platform, url }) => {
	const title = url.searchParams.get('title') ?? undefined;

	const browser = await puppeteer.launch(platform?.env.MYBROWSER);
	const page = await browser.newPage();
	await page.setViewport({ width, height, deviceScaleFactor: 1.5 });

	await page.goto(url + '/api/og/render?title=' + title);
	const img = (await page.screenshot({ type: 'png' })) as Buffer;
	await browser.close();

	return new Response(img, {
		headers: {
			'content-type': 'image/png',
		},
	});
};

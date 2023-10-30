// import chromium from '@sparticuz/chromium';
// import playwright from 'playwright-core';
// import type { RequestHandler } from './$types';
// import { dev } from '$app/environment';
// import { OVERCAST_EMAIL, OVERCAST_PWD } from '$env/static/private';
// import { wait } from '$lib/utils';

// const exePath = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';

// export const GET: RequestHandler = async ({ url }) => {
// 	// const title = url.searchParams.get('title') ?? undefined;

// 	const browser = await playwright.chromium.launch({
// 		args: dev ? [] : chromium.args,
// 		executablePath: dev ? exePath : await chromium.executablePath(),
// 		headless: false,
// 	});
// 	// Create a page with the Open Graph image size best practise
// 	const page = await browser.newPage({
// 		viewport: {
// 			width: 1920,
// 			height: 1080,
// 		},
// 	});

// 	await page.goto('https://overcast.fm/login', {
// 		timeout: 15 * 1000,
// 	});
// 	await wait(Math.random() + 500);
// 	await page.getByLabel('email').fill(OVERCAST_EMAIL);
// 	await wait(Math.random() + 700);
// 	await page.getByLabel('password').fill(OVERCAST_PWD);
// 	await wait(Math.random() + 500);
// 	await page.getByRole('button', { name: 'Log In' }).click();

// 	await page.waitForURL('https://overcast.fm/podcasts');

// 	await wait(Math.random() + 800);
// 	await page.goto('https://overcast.fm/account');
// 	const downloadPromise = page.waitForEvent('download');
// 	await wait(Math.random() + 600);
// 	await page.getByText('All data').click();
// 	const download = await downloadPromise;

// 	// Wait for the download process to complete and save the downloaded file somewhere.
// 	await download.saveAs('./overcast/' + download.suggestedFilename());

// 	await browser.close();

// 	return new Response('ok', {
// 		status: 200,
// 		statusText: 'OK',
// 		headers: {
// 			'Content-Type': 'image/png',
// 			'Cache-Control': 's-maxage=31536000, stale-while-revalidate',
// 		},
// 	});
// };

export {};

import { browser } from '$app/environment';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export const wait = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

export const decodeHtml = (html: string) => {
	// todo use jsdom
	if (!browser) return html;
	const txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

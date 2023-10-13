// Squelch warnings of image imports from images dir
declare module './images/*' {
	const meta;
	export default meta;
}

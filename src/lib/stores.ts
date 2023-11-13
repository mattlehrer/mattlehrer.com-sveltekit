import { writable } from 'svelte/store';

export const audioPlaying = writable<null | string>(null);

import { writable } from 'svelte/store';

import { Views } from './enums';

export const displayedView = writable(Views.TRENDING);
export const searchTerm = writable('');

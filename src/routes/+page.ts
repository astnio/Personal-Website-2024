import type { PageLoad } from './$types';
import { fetchPlaceholderData } from './api/fetchPlaceholderData';

export const load = (async ({ fetch }) => {
	const placeHolderData = await fetchPlaceholderData(fetch);
	console.log('Data in +page.ts:', placeHolderData);

	return {
		props: {
			placeHolderData
		}
	};
}) satisfies PageLoad;

export async function fetchPlaceholderData(fetch: typeof window.fetch) {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error('Failed to fetch');
		}
	} catch (error) {
		console.error(error);
		return null;
	}
}

import Parser from 'rss-parser';

export const get = async () => {
	const parser = new Parser();
	const feedUrl = 'https://byaustin.net/index.xml#feed'; // Replace with your RSS feed URL
	const feed = await parser.parseURL(feedUrl);

	if (feed) {
		return {
			status: 200,
			body: {
				posts: feed.items
			}
		};
	} else {
		return {
			status: 500,
			body: {
				error: 'Failed to fetch RSS feed'
			}
		};
	}
};

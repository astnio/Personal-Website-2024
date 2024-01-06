import Parser from 'rss-parser';

export async function GET() {
	const parser = new Parser();
	const feedUrl = 'https://byaustin.net/index.xml'; // Replace with your RSS feed URL
	try {
		const feed = await parser.parseURL(feedUrl);
		return new Response(JSON.stringify(feed));
	} catch (error) {
		if (error instanceof Error) {
			return {
				status: 500,
				body: error.message
			};
		} else
			return {
				status: 500,
				body: 'An unknown error occurred'
			};
	}
}

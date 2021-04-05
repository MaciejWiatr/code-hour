const Twitter = require("twitter");
const dotenv = require("dotenv");
const result = dotenv.config();

if (result.error) {
	throw result.error;
}

console.log(result.parsed);

const useTwitter = () => {
	const config = {
		consumer_key: process.env.API_KEY,
		consumer_secret: process.env.API_KEY_SECRET,
		access_token_key: process.env.A_TOKEN,
		access_token_secret: process.env.A_TOKEN_SECRET,
	};
	const client = new Twitter(config);

	const postTweet = (message: string) => {
		console.log("test2");
		try {
			client.post(
				"statuses/update",
				{ status: message },
				function (error, tweet, response) {
					if (error) throw error;
					console.log(tweet);
					console.log(response);
				}
			);
		} catch (e) {
			console.log(e.message);
		}
	};

	return { postTweet };
};

export default useTwitter;

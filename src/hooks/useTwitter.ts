import { ITweet } from "../ts/interfaces";
import dayjs from "dayjs";

const Twitter = require("twitter");
const dotenv = require("dotenv");
const result = dotenv.config();

if (result.error) {
	console.log(result.error);
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
		try {
			client.post(
				"statuses/update",
				{ status: message },
				function (error: Error, tweet: ITweet) {
					if (error) throw error;
					console.log(tweet);
				}
			);
		} catch (e) {
			console.log(e.message);
		}
	};

	const getChallengeTweets = async (
		user_id: string,
		challenge_hashtag: string
	) => {
		let result: ITweet[] = await client
			.get("statuses/user_timeline", {
				user_id: `@${user_id}`,
			})
			.then((tweet: ITweet) => tweet);
		result = result.filter((r) =>
			r.entities.hashtags.some((h) => h.text === `${challenge_hashtag}`)
		);
		const tweetHistory = result.map((r) => {
			const [text, link] = r.text.split("…");
			return {
				text,
				link,
			};
		});
		return tweetHistory;
	};

	const getLikes = async (user_id: string, challenge_hashtag: string) => {
		let result: ITweet[] = await client
			.get("statuses/user_timeline", {
				user_id: `@${user_id}`,
			})
			.then((tweet: ITweet) => tweet);
		result = result.filter((r) =>
			r.entities.hashtags.some((h) => h.text === `${challenge_hashtag}`)
		);

		let total = 0;
		result.forEach((r) => {
			total += r.favorite_count;
		});

		return {
			date: dayjs().unix(),
			total,
		};
	};

	return { postTweet, getChallengeTweets, getLikes };
};

export default useTwitter;

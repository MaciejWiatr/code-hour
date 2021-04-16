import { IContextValue, ITweet } from "../ts/interfaces";
import SavefileService from "../services/SavefileService";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import getToday from "../utils/getToday";

const Twitter = require("twitter");
const dotenv = require("dotenv");
dotenv.config();

const useTwitter = () => {
	const { state, dispatch } = useContext<IContextValue>(AppContext);
	const config = {
		consumer_key: process.env.API_KEY,
		consumer_secret: process.env.API_KEY_SECRET,
		access_token_key: process.env.A_TOKEN,
		access_token_secret: process.env.A_TOKEN_SECRET,
	};
	const client = new Twitter(config);

	const saveTweetData = (data: {
		total: number;
		date: string;
		type: "likes" | "shares";
	}) => {
		const newSavefileData = SavefileService.getData();
		if (
			!newSavefileData?.chartData[data.type]?.some(
				(el) => el.date === data.date
			)
		) {
			newSavefileData?.chartData[data.type]?.push({
				date: data.date,
				total: data.total,
			});
		} else {
			console.log(
				"Updated existing data entry with followind data:",
				data
			);
			newSavefileData!.chartData[data.type]!.find(
				(el) => el.date === data.date
			)!.total = data.total;
		}
		dispatch({ type: "MODIFY_SAVE", payload: newSavefileData });
	};

	const getSavableData = (total: number, type: "likes" | "shares") => {
		const today = getToday();

		const data = {
			date: today,
			total,
			type,
		};

		return data;
	};

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

	const getChallengeTweets = async (): Promise<ITweet[]> => {
		let tweets: ITweet[] = await client
			.get("statuses/user_timeline", {
				user_id: `@${state.username}`,
				count: 200,
				exclude_replies: true,
			})
			.then((tweet: ITweet) => tweet);

		tweets = tweets.filter(
			(r) =>
				r.entities.hashtags.some(
					(h) => h.text === `${state.challengeName}`
				) && r.text.toLowerCase().includes("day")
		);

		return tweets;
	};

	const getHistory = async () => {
		let tweets = await getChallengeTweets();
		const tweetHistory = tweets.map((r) => {
			const [text, link] = r.text.split("…");
			return {
				text,
				link,
			};
		});
		return tweetHistory;
	};

	const fetchLikes = async () => {
		const tweets = await getChallengeTweets();

		let total = 0;
		tweets.forEach((r) => {
			total += r.favorite_count;
		});
		const data = getSavableData(total, "likes");
		saveTweetData(data);
		return data;
	};

	const fetchRetweets = async () => {
		const tweets = await getChallengeTweets();
		let total = 0;
		tweets.forEach((tw) => {
			total += tw.retweet_count;
		});
		const data = getSavableData(total, "shares");
		saveTweetData(data);
		return data;
	};

	return {
		postTweet,
		getLikes: fetchLikes,
		getHistory,
		getRetweets: fetchRetweets,
	};
};

export default useTwitter;

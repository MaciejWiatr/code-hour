import { Flex, Grid, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import useTwitter from "../../hooks/useTwitter";
import { IContextValue } from "../../ts/interfaces";
import { ChartItem } from "./ChartItem";

const exampleData = [
	{
		pv: 50,
	},
	{
		pv: 13,
	},
	{
		pv: 12,
	},
	{
		pv: 39,
	},
];

function ChartsSection() {
	const { getLikes, getRetweets } = useTwitter();
	const [likes, setLikes] = useState<any[]>();
	const [retweets, setRetweets] = useState<any[]>();
	const { state } = useContext<IContextValue>(AppContext);

	useEffect(() => {
		getLikes();
		getRetweets();

		setLikes(state.chartData.likes);
		setRetweets(state.chartData.shares);
		console.log(likes, retweets);

		return () => {
			setLikes([]);
			setRetweets([]);
		};
	}, []);

	return (
		<Flex gridArea="tweet-charts" flexDir="column">
			<Text fontWeight="medium" fontSize="xl" mb="2" color="gray.300">
				Charts
			</Text>
			<Grid
				h="64"
				bg="gray.700"
				w="full"
				borderRadius="5px"
				gridTemplateRows="repeat(3,1fr)"
				gridTemplateColumns="1fr"
				overflow="hidden"
			>
				<ChartItem name="Likes" data={likes} rowStart={0} rowEnd={2} />
				<ChartItem
					name="Shares"
					data={retweets}
					rowStart={2}
					rowEnd={3}
				/>
			</Grid>
		</Flex>
	);
}

export { ChartsSection };

import { Flex, Grid, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import useTwitter from "../../hooks/useTwitter";
import { IContextValue } from "../../ts/interfaces";
import { ChartItem } from "./ChartItem";

function ChartsSection() {
	const { getLikes, getRetweets } = useTwitter();
	const { state } = useContext<IContextValue>(AppContext);

	useEffect(() => {
		console.log(state.chartData);
		getLikes();
		getRetweets();
	}, []);

	return (
		<Flex gridArea="tweet-charts" flexDir="column">
			<Text fontWeight="medium" fontSize="xl" mb="2" color="gray.300">
				Charts
			</Text>
			<Grid
				bg="gray.700"
				w="full"
				borderRadius="5px"
				gridTemplateRows="repeat(2,1fr)"
				gridTemplateColumns="1fr"
				overflow="hidden"
			>
				<ChartItem
					name="Likes"
					data={state.chartData.likes}
					rowStart={0}
					rowEnd={2}
				/>
				<ChartItem
					name="Shares"
					data={state.chartData.shares}
					rowStart={2}
					rowEnd={3}
				/>
			</Grid>
		</Flex>
	);
}

export { ChartsSection };

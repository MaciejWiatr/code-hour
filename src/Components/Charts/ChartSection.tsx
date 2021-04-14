import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
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
	// TODO: Add likes history pulling

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
				<ChartItem
					name="Likes"
					data={exampleData}
					rowStart={0}
					rowEnd={2}
				/>
				<ChartItem
					name="Shares"
					data={exampleData}
					rowStart={2}
					rowEnd={3}
				/>
				<ChartItem
					name="Comments"
					data={exampleData}
					rowStart={3}
					rowEnd={4}
					isLast
				/>
			</Grid>
		</Flex>
	);
}

export { ChartsSection };

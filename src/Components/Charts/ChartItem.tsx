import { GridItem, Flex, Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useMeasure } from "react-use";
import { LineChart, Line } from "recharts";

interface IProps {
	data: any[];
	rowStart: number;
	rowEnd: number;
	name: string;
	isLast?: boolean;
}

const ChartItem: FC<IProps> = ({
	data,
	rowStart,
	rowEnd,
	name,
	isLast = false,
}) => {
	data = data.map((el) => {
		const newEl = {
			...el,
			pv: el.pv + Math.floor(Math.random() * 20),
		};
		return newEl;
	});
	const [ChartContainerRef, { width, height }] = useMeasure<any>();
	const diff = data[data.length - 1].pv - data[data.length - 2].pv;
	return (
		<GridItem
			display="flex"
			rowStart={rowStart}
			rowEnd={rowEnd}
			borderBottom={!isLast ? "1px solid #1A202C" : ""}
		>
			<Flex w="40%" flexDir="column" justifyContent="center" p={1} pl={4}>
				<Text fontWeight="semibold" fontSize="md">
					{name}
				</Text>
				<Text color={diff > 0 ? "green.200" : "red.400"}>
					15 ({diff > 0 ? "+" : ""}
					{diff})
				</Text>
			</Flex>
			<Box w="60%" p={1}>
				<Box w="full" h="full" p={2} ref={ChartContainerRef}>
					<LineChart width={width} height={height} data={data}>
						<Line
							type="monotone"
							dataKey="pv"
							stroke="#F56565"
							strokeWidth={3}
						/>
					</LineChart>
				</Box>
			</Box>
		</GridItem>
	);
};

export { ChartItem };

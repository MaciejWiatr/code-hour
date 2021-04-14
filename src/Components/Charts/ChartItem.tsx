import { GridItem, Flex, Box, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
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
	data = [],
	rowStart,
	rowEnd,
	name,
	isLast = false,
}) => {
	const [chartData, setChartData] = useState(data);
	const [ChartContainerRef, { width, height }] = useMeasure<any>();

	const calculateDiff = () => {
		try {
			if (chartData.length > 1) {
				return (
					chartData[chartData.length].total -
					chartData[chartData.length - 1].total
				);
			} else {
				return 0;
			}
		} catch {
			return 0;
		}
	};

	const calculateSum = () => {
		let sum = 0;
		chartData.forEach((entry) => {
			sum += entry.total;
		});
		return sum;
	};

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
				<Text color="green.200">
					{calculateSum()} ({calculateDiff()})
				</Text>
			</Flex>
			<Box w="60%" p={1}>
				<Box w="full" h="full" p={2} ref={ChartContainerRef}>
					<LineChart width={width} height={height} data={chartData}>
						<Line
							type="monotone"
							dataKey="total"
							stroke="#F56565"
							strokeWidth={3}
						/>
						test
					</LineChart>
				</Box>
			</Box>
		</GridItem>
	);
};

export { ChartItem };

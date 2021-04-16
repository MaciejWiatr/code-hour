import { GridItem, Flex, Box, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
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
	const [sum, setSum] = useState(0);
	const [diff, setDiff] = useState(0);
	const [ChartContainerRef, { width, height }] = useMeasure<any>();

	const calculateDiff = () => {
		console.log("Calculating diff");
		try {
			if (data.length > 0) {
				setDiff(
					data[data.length - 1].total - data[data.length - 2].total
				);
			} else {
				setDiff(0);
			}
		} catch (e) {}
	};

	const calculateSum = () => {
		setSum(data[data.length - 1].total);
	};

	useEffect(() => {
		if (typeof data !== "undefined") {
			calculateSum();
			calculateDiff();
		}
	}, [data]);

	return (
		<GridItem
			display="flex"
			rowStart={rowStart}
			rowEnd={rowEnd}
			borderBottom={!isLast ? "1px solid #1A202C" : ""}
		>
			<Flex w="40%" flexDir="column" justifyContent="center" p={1} pl={4}>
				<Text fontSize="sm" mb="0">
					{name}
				</Text>
				<Text color={diff >= 0 ? "green.200" : "red.400"}>
					{sum}{" "}
					<Text as="span" color="gray.400">
						total
					</Text>{" "}
					({diff > 0 ? `+${diff}` : diff})
				</Text>
			</Flex>
			<Box w="60%" p={1}>
				<Box w="full" h="full" p={2} ref={ChartContainerRef}>
					<LineChart width={width} height={height} data={data}>
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

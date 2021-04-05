import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

function HistorySection() {
	return (
		<Flex gridArea="tweet-history" flexDir="column">
			<Text fontWeight="medium" fontSize="xl" mb="2" color="gray.300">
				Tweet history
			</Text>
			<Box w="full" h="14" bg="gray.700" borderRadius="5px"></Box>
		</Flex>
	);
}

export { HistorySection };

import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function HeaderSection() {
	return (
		<Flex
			gridArea="header"
			justifyContent="center"
			alignItems="start"
			flexDir="column"
		>
			<Text fontSize="xl" fontWeight="semibold">
				Hello Maciej, it's your
			</Text>
			<Flex fontSize="4xl" fontWeight="bold">
				<Text color="red.400" mr="2">
					24
				</Text>
				Day of 100 days of code
			</Flex>
		</Flex>
	);
}

export { HeaderSection };

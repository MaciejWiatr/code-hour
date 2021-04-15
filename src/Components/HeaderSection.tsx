import { Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { IContextValue } from "../ts/interfaces";

function HeaderSection() {
	const { state } = useContext<IContextValue>(AppContext);

	return (
		<Flex
			gridArea="header"
			justifyContent="center"
			alignItems="start"
			flexDir="column"
		>
			<Text fontSize="xl" fontWeight="semibold">
				Hello {state.username}, it's your
			</Text>
			<Flex fontSize="4xl" fontWeight="bold">
				<Text color="red.400" mr="2">
					{state.day}
				</Text>
				Day of {state.challengeName}
			</Flex>
		</Flex>
	);
}

export { HeaderSection };

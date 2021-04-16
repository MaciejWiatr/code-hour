import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../context/AppContext";
import { IContextValue } from "../ts/interfaces";

interface IProps {
	setModalOpen: (open: boolean) => void;
}

const HeaderSection = ({ setModalOpen }) => {
	const { state } = useContext<IContextValue>(AppContext);
	const history = useHistory();

	const handleEdit = () => {
		history.push("/login");
	};

	const handleChangeCurrentDay = () => {
		setModalOpen(true);
	};

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
			<Flex fontSize="4xl" fontWeight="bold" alignItems="center" w="full">
				<Text color="red.400" mr="2">
					{state.day}
				</Text>
				Day of {state.challengeName}
				<Spacer />
				<Button
					colorScheme="blackAlpha"
					color="gray.400"
					size="sm"
					ml="2"
					onClick={handleEdit}
				>
					Edit profile
				</Button>
				<Button
					colorScheme="blackAlpha"
					color="gray.400"
					size="sm"
					ml="2"
					onClick={handleChangeCurrentDay}
				>
					Change current day
				</Button>
			</Flex>
		</Flex>
	);
};

export { HeaderSection };

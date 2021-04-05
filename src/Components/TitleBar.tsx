import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { FiX } from "react-icons/fi";

function TitleBar() {
	const handleClose = () => {
		window.close();
	};
	return (
		<Flex
			w="100%"
			h="3rem"
			bgColor="gray.900"
			justifyContent="space-between"
			alignItems="center"
			overflow="hidden"
		>
			<Flex
				pl="6"
				w="full"
				h="full"
				className="titlebar"
				alignItems="center"
				onClick={(e) => e.preventDefault()}
			>
				<Flex
					color="white"
					fontWeight="semibold"
					alignItems="center"
					h="full"
				>
					<Text fontSize="xl" mr="1" color="red.400">
						<BiStopwatch />
					</Text>
					CodeHour
				</Flex>
			</Flex>
			<Button
				onClick={handleClose}
				borderRadius="0px"
				colorScheme="grey"
				h="3rem"
				w="4rem"
				_hover={{
					bgColor: "#0B0B10",
					scale: 1,
				}}
			>
				<FiX />
			</Button>
		</Flex>
	);
}

export { TitleBar };

import {
	Box,
	Flex,
	NumberInput,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	NumberInputField,
	Text,
	Button,
} from "@chakra-ui/react";
import React, { FC, useContext, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { IContextValue } from "../../ts/interfaces";

interface IProps {
	setModalOpen: (open: boolean) => void;
}

const DayModal: FC<IProps> = ({ setModalOpen }) => {
	const { state, dispatch } = useContext<IContextValue>(AppContext);
	const [dayVal, setDayVal] = useState(state.day);

	const handleSubmit = () => {
		dispatch({ type: "MODIFY_SAVE", payload: { ...state, day: dayVal } });
		setModalOpen(false);
	};

	return (
		<Flex
			position="fixed"
			top="0"
			left="0"
			zIndex="modal"
			w="full"
			h="full"
			justifyContent="center"
			alignItems="center"
		>
			<Flex
				w="sm"
				bgColor="gray.800"
				zIndex="popover"
				borderRadius="5px"
				shadow="lg"
				flexDir="column"
				justifyContent="center"
				p="3"
				color="white"
			>
				<Text fontSize="3xl" fontWeight="bold" w="full">
					Insert your current challange day
				</Text>
				<Text mb="2" color="gray.400">
					Last time you visited it was {state.day}
				</Text>
				<Flex>
					<NumberInput
						w="full"
						mr="2"
						type="number"
						borderRadius="5px !important"
						bgColor="gray.700"
						border="none"
						defaultValue={state.day}
						min={1}
						max={31}
						onChange={(val) => setDayVal(parseInt(val))}
						required
					>
						<NumberInputField border="none" />
						<NumberInputStepper border="none">
							<NumberIncrementStepper border="none" />
							<NumberDecrementStepper border="none" />
						</NumberInputStepper>
					</NumberInput>
					<Button
						onClick={handleSubmit}
						colorScheme="red"
						bgColor="red.400"
						fontWeight="normal"
						borderRadius="5px"
					>
						Submit
					</Button>
				</Flex>
			</Flex>
			<Box
				position="absolute"
				w="full"
				h="full"
				bgColor="black"
				left="0"
				top="0"
				opacity="0.5"
				zIndex="modal"
			/>
		</Flex>
	);
};

export default DayModal;

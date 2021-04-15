import {
	Flex,
	Textarea,
	Button,
	Text,
	CircularProgress,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useTwitter from "../../hooks/useTwitter";
import Swal from "sweetalert2";
import { AppContext } from "../../context/AppContext";
import { IContextValue, textAreaType } from "../../ts/interfaces";
import CreateTweetService from "../../services/CreateTweetService";

function FormSection() {
	const { state } = useContext<IContextValue>(AppContext);
	const { register, handleSubmit, watch } = useForm();
	const [letterNumber, setNumber] = useState(0);
	const [textAreaStatus, setTextAreaStatus] = useState<textAreaType>("Ok");
	const [textAreaBorder, setTextAreaBorder] = useState("none");
	const [submitDisabled, setSubmitDisabled] = useState(false);
	const textareaWatch = watch("TweetText");
	const [previewVal, setPreviewVal] = useState("");
	const { postTweet } = useTwitter();
	const statusColors = {
		Warning: "#ECC94B",
		Error: "#F56565",
		Ok: "#48BB78",
	};

	const onSubmit = async () => {
		postTweet(textareaWatch);
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Your tweet has been posted!",
			showConfirmButton: false,
			timer: 1500,
		});
	};

	const handlePreview = () => {
		const preview = CreateTweetService.generateTweet(
			textareaWatch,
			state.day,
			state.challengeName
		);
		setPreviewVal(preview.trim());
	};

	const resetPreview = () => {
		setPreviewVal("");
	};

	useEffect(() => {
		if (textareaWatch) {
			setNumber(textareaWatch.split("").length);
		} else {
			setNumber(0);
		}
	}, [textareaWatch, setTextAreaStatus, setNumber]);

	useEffect(() => {
		if (letterNumber >= 200 && letterNumber <= 250) {
			setTextAreaStatus("Warning");
		} else if (letterNumber >= 250) {
			setTextAreaStatus("Error");
			setSubmitDisabled(true);
		} else if (letterNumber <= 200) {
			setTextAreaStatus("Ok");
		} else {
			setTextAreaStatus("Ok");
		}

		if (textAreaStatus !== "Ok" && letterNumber <= 250) {
			setSubmitDisabled(false);
		}
	}, [letterNumber, setTextAreaStatus]);

	useEffect(() => {
		setTextAreaBorder(getTextAreaBorder());
	}, [textAreaStatus, setTextAreaBorder]);

	const getTextAreaBorder = () => {
		switch (textAreaStatus) {
			case "Ok": {
				return "none";
			}
			case "Warning": {
				return "2px solid #ECC94B !important";
			}
			case "Error": {
				return "2px solid #F56565 !important";
			}
			default:
				return "none";
		}
	};

	return (
		<Flex gridArea="new-tweet" flexDir="column">
			<Text fontWeight="medium" fontSize="xl" mb="2" color="gray.300">
				Create new tweet
			</Text>
			<Flex as="form" flexDir="column" onSubmit={handleSubmit(onSubmit)}>
				<Textarea
					placeholder="Describe your today progress"
					pt="2"
					h="28"
					bgColor="gray.700"
					border={textAreaBorder}
					required
					{...register("TweetText")}
				></Textarea>
				<Flex
					w="full"
					justifyContent="space-between"
					alignItems="center"
					mt="2"
					mb="2"
					fontSize="sm"
				>
					<Flex alignItems="center">
						<CircularProgress
							value={(letterNumber / 250) * 100}
							border="none"
							size="20px"
							thickness="13px"
							trackColor="gray.600"
							color={statusColors[textAreaStatus]}
							mr="1"
						/>
						<Text color="gray.500">
							Number of letters: {letterNumber}
						</Text>
					</Flex>

					{textAreaStatus === "Error" ? (
						<Text color="red.400">You've reached the limit</Text>
					) : null}
				</Flex>
				<Flex w="full">
					<Button
						type="submit"
						w="50%"
						mr="2"
						colorScheme="red"
						bgColor="red.400"
						fontWeight="normal"
						borderRadius="5px"
						isDisabled={submitDisabled}
					>
						Send
					</Button>
					<Button
						w="50%"
						bgColor="gray.700"
						color="gray.300"
						fontWeight="normal"
						borderRadius="5px"
						onClick={handlePreview}
						_hover={{
							bgColor: "gray.900",
						}}
						_focus={{
							bgColor: "gray.900",
						}}
					>
						Preview
					</Button>
				</Flex>
			</Flex>
			<Text
				fontWeight="medium"
				fontSize="xl"
				mt="2"
				mb="2"
				color="gray.300"
			>
				Preview
			</Text>
			<Textarea
				pt="2"
				h="36"
				bgColor="gray.700"
				border="none"
				value={previewVal}
				readOnly
			></Textarea>
			<Button
				mt="4"
				colorScheme="black"
				bgColor="gray.700"
				color="gray.300"
				onClick={resetPreview}
				_hover={{
					bgColor: "gray.900",
				}}
				_focus={{
					bgColor: "gray.700",
				}}
			>
				Reset preview
			</Button>
		</Flex>
	);
}

export { FormSection };

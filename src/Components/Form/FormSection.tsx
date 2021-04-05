import { Flex, Textarea, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useTwitter from "../../hooks/useTwitter";

function FormSection() {
	const { register, handleSubmit, watch } = useForm();
	const [letterNumber, setNumber] = useState(0);
	const textareaWatch = watch("TweetText");
	const { postTweet } = useTwitter();
	const onSubmit = (data: any) => {
		console.log("test");
		postTweet(data.TweetText);
	};

	useEffect(() => {
		if (textareaWatch) {
			setNumber(textareaWatch.split("").length);
		} else {
			setNumber(0);
		}
	}, [textareaWatch]);

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
					border="none"
					{...register("TweetText")}
				></Textarea>
				<Text mt="1" mb="1" fontSize="sm" color="gray.500">
					Number of letters: {letterNumber}
				</Text>
				<Flex w="full">
					<Button
						type="submit"
						w="50%"
						mr="2"
						colorScheme="red"
						bgColor="red.400"
						fontWeight="normal"
						borderRadius="5px"
					>
						Send
					</Button>
					<Button
						w="50%"
						bgColor="gray.700"
						color="gray.300"
						fontWeight="normal"
						borderRadius="5px"
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
			<Textarea pt="2" bgColor="gray.700" border="none"></Textarea>
		</Flex>
	);
}

export { FormSection };

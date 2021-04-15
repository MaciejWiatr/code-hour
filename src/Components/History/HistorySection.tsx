import { Flex, Box, Text, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import useTwitter from "../../hooks/useTwitter";
import { ITweetHistoryElement } from "../../ts/interfaces";

function HistorySection() {
	const { getHistory } = useTwitter();
	const [tweets, setTweets] = useState<ITweetHistoryElement[]>([]);

	const updateTweets = async () => {
		const tweetResult = await getHistory();
		setTweets(tweetResult);
	};

	useEffect(() => {
		updateTweets();
		return () => {
			setTweets([]);
		};
	}, []);

	return (
		<Flex gridArea="tweet-history" flexDir="column">
			<Text
				fontWeight="medium"
				fontSize="xl"
				// mb="2"
				color="gray.300"
				position="sticky"
				top="0"
				bgColor="gray.800"
				pb="2"
			>
				Tweet history
			</Text>
			<Box as="ul" maxH="435px" borderRadius="5px" overflowY="scroll">
				{tweets.map((tw, index) => {
					return (
						<Box
							key={index}
							w="full"
							h="28"
							bg="gray.700"
							borderRadius="5px"
							p="2"
							mb="4"
							color="gray.400"
							fontSize="sm"
						>
							<Text>{tw.text}</Text>
							<Link href={tw.link} isExternal color="red.400">
								<Flex alignItems="center">
									<Text mr="1">Go to</Text> <FiExternalLink />
								</Flex>
							</Link>
						</Box>
					);
				})}
			</Box>
		</Flex>
	);
}

export { HistorySection };

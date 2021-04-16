import { Flex, Box, Portal, Link } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ChartsSection } from "../components/Charts/ChartSection";
import { FormSection } from "../components/Form/FormSection";
import { HeaderSection } from "../components/HeaderSection";
import { HistorySection } from "../components/History/HistorySection";
import { SectionsWrapper } from "../components/Layout/SectionsWrapper";
import { DayModal } from "../components/Modal";
import { TitleBar } from "../components/TitleBar";
import { AppContext } from "../context/AppContext";
import { IContextValue } from "../ts/interfaces";
import getToday from "../utils/getToday";

const HomePage = () => {
	const { state } = useContext<IContextValue>(AppContext);
	const [modalOpen, setModalOpen] = useState(
		state.lastVisited !== getToday()
	);
	const history = useHistory();

	useEffect(() => {
		if (!state.username) {
			history.push("/login");
		}
	}, [state]);

	return (
		<Flex direction="column" borderRadius="20px" h="full">
			<TitleBar />
			<Box
				w="full"
				bgColor="gray.800"
				color="white"
				p="6"
				pb="10"
				flexGrow={1}
			>
				<SectionsWrapper>
					<HeaderSection setModalOpen={setModalOpen} />
					<FormSection />
					<HistorySection />
					<ChartsSection />
				</SectionsWrapper>
				<Box w="full" textAlign="left" color="gray.700">
					Created by:{" "}
					<Link href="https://github.com/MaciejWiatr" target="blank">
						Maciej Wiatr
					</Link>
				</Box>
			</Box>
			<Portal>
				{modalOpen ? <DayModal setModalOpen={setModalOpen} /> : null}
			</Portal>
		</Flex>
	);
};

export default HomePage;

import { Flex, Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { ChartsSection } from "../Components/Charts/ChartSection";
import { FormSection } from "../Components/Form/FormSection";
import { HeaderSection } from "../Components/HeaderSection";
import { HistorySection } from "../Components/History/HistorySection";
import { SectionsWrapper } from "../Components/Layout/SectionsWrapper";
import { TitleBar } from "../Components/TitleBar";
import { AppContext } from "../context";
import { IContextValue } from "../ts/interfaces";

const HomePage = () => {
	const { state } = useContext<IContextValue>(AppContext);
	const history = useHistory();

	useEffect(() => {
		if (!state.username) {
			history.push("/login");
		}
	}, [state]);

	return (
		<Flex direction="column" borderRadius="20px" h="full">
			<TitleBar />
			<Box w="full" bgColor="gray.800" color="white" p="6" flexGrow={1}>
				<SectionsWrapper>
					<HeaderSection />
					<FormSection />
					<HistorySection />
					<ChartsSection />
				</SectionsWrapper>
			</Box>
		</Flex>
	);
};

export default HomePage;

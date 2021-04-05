import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.global.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { ChartsSection } from "./Components/Charts/ChartSection";
import { TitleBar } from "./Components/TitleBar";
import { HeaderSection } from "./Components/HeaderSection";
import { FormSection } from "./Components/Form/FormSection";
import { HistorySection } from "./Components/History/HistorySection";
import { SectionsWrapper } from "./Components/Layout/SectionsWrapper";

const HomePage = () => {
	return (
		<Flex direction="column" h="100vh" borderRadius="20px">
			<TitleBar />
			<Box h="full" w="full" bgColor="gray.800" color="white" p="6">
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

export default function App() {
	return (
		<ChakraProvider>
			<Router>
				<Switch>
					<Route path="/" component={HomePage} />
				</Switch>
			</Router>
		</ChakraProvider>
	);
}

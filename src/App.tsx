import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.global.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppContextProvider from "./context/AppContext";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

export default function App() {
	return (
		<AppContextProvider>
			<ChakraProvider>
				<Router>
					<Switch>
						<Route path="/login" component={LoginPage} />
						<Route path="/" component={HomePage} />
					</Switch>
				</Router>
			</ChakraProvider>
		</AppContextProvider>
	);
}

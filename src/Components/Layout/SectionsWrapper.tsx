import { Grid } from "@chakra-ui/react";
import React, { FC } from "react";

const SectionsWrapper: FC = ({ children }) => {
	return (
		<Grid
			h="full"
			w="full"
			gap={4}
			templateRows="6rem 1fr"
			templateColumns="repeat(3, 1fr)"
			templateAreas="'header header header' 'new-tweet tweet-history tweet-charts'"
		>
			{children}
		</Grid>
	);
};

export { SectionsWrapper };

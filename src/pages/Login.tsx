import {
	Box,
	Button,
	Flex,
	FormLabel,
	Input,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { TitleBar } from "../Components/TitleBar";
import { AppContext } from "../context/AppContext";
import { IContextValue } from "../ts/interfaces";

const InputLabel = (props: any) => (
	<Text fontWeight="normal" mt="1" mb="1" as="label" color="gray.300">
		{props.children}
	</Text>
);

const FormInput = (props: any) => (
	<Input
		bgColor="gray.800"
		border="none"
		h="12"
		required
		{...props}
		{...props.register}
	/>
);

interface IFormData {
	username: string;
	challengeName: string;
	twitterUsername: string;
}

const LoginPage = () => {
	const { register, handleSubmit } = useForm();
	const { state, dispatch } = useContext<IContextValue>(AppContext);
	const history = useHistory();

	const onSubmit = (data: IFormData) => {
		console.log(data);
		dispatch({ type: "MODIFY_SAVE", payload: data });
		history.push("/");
	};

	return (
		<>
			<TitleBar />
			<Flex
				w="full"
				h="full"
				bgColor="gray.800"
				color="white"
				justifyContent="center"
				alignItems="center"
			>
				<Flex
					flexDir="column"
					w="md"
					h="lg"
					bgColor="gray.900"
					borderRadius="5px"
					p="4"
				>
					<Text
						textAlign="center"
						w="full"
						fontWeight="semibold"
						fontSize="2xl"
						mt="2"
						mb="2"
					>
						Hi, welcome to{" "}
						<Text as="span" color="red.400">
							CodeHour
						</Text>
					</Text>
					<Text textAlign="center">
						Before we can start you have to provide some details
					</Text>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="login__form"
					>
						<Flex flexDir="column" h="full">
							<InputLabel>Your name</InputLabel>
							<FormInput register={register("username")} />
							<InputLabel>
								Name of the challenge you want to attempt
							</InputLabel>
							<FormInput register={register("challengeName")} />
							<InputLabel>
								Your twitter username i.e @maciej_wiatr
							</InputLabel>
							<FormInput register={register("twitterUsername")} />
							<Spacer />
							<Button
								colorScheme="red"
								bgColor="red.400"
								type="submit"
							>
								Save
							</Button>
						</Flex>
					</form>
				</Flex>
			</Flex>
		</>
	);
};

export default LoginPage;

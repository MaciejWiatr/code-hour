import { ISavefileData } from "../ts/interfaces";

const initialState: ISavefileData = {
	chartData: { likes: [], shares: [] },
	day: 1,
	username: "",
	challengeName: "",
	twitterUsername: "",
	lastVisited: "never",
};

export default initialState;

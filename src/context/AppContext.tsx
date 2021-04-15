import React from "react";
import { createContext, FC, useReducer } from "react";
import SavefileService from "../services/SavefileService";
import { IAction, ISavefileData } from "../ts/interfaces";
import initialState from "../constants/initialState";

const appReducer = (state: ISavefileData, action: IAction) => {
	switch (action.type) {
		case "MODIFY_SAVE": {
			const newState = { ...state, ...action.payload };
			SavefileService.setData(newState);
			return newState;
		}
		case "LOAD_SAVE": {
			const saveData = SavefileService.getData();
			return saveData;
		}
		default:
			return state;
	}
};
const AppContext = createContext(initialState as any);

const AppContextProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, SavefileService.getData());

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
export { AppContext };

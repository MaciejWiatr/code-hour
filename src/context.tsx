import React, { useEffect } from "react";
import { createContext, FC, useReducer } from "react";
import SavefileService from "./services/SavefileService";
import { IAction, ISavefileData } from "./ts/interfaces";
import initialState from "./constants/initialState";

const appReducer = (state: ISavefileData, action: IAction) => {
	switch (action.type) {
		case "MODIFY_SAVE": {
			console.log(
				"Modify save was invoked with following payload",
				action.payload
			);
			const newState = { ...state, ...action.payload };
			console.log(newState);
			SavefileService.setData(newState);
			return newState;
		}
		case "LOAD_SAVE": {
			const saveData = SavefileService.getData();
			console.log("Loaded savefile with following data:", saveData);
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

import React, { useReducer, createContext, useContext } from 'react';
import { ActionMap } from '../lib/hooks/useForm';

export type InitialStateType = {
	whichIs: string;
	completed: boolean;
};

export enum PathTypes {
	SET_STEP_COMPLETED = 'SET_STEP_COMPLETED',
	SET_PAHTNAME = 'SET_PAHTNAME'
}

type PathPayload = {
	[PathTypes.SET_STEP_COMPLETED]: {
		completed: boolean;
	};
	[PathTypes.SET_PAHTNAME]: {
		pathname: string;
	};
};

const initialState = {
	whichIs: '',
	completed: false
};

export const PathContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

type PathActions = ActionMap<PathPayload>[keyof ActionMap<PathPayload>];

const pathReducer = (state: InitialStateType, action: PathActions) => {
	switch (action.type) {
		case PathTypes.SET_STEP_COMPLETED:
			return {
				...state,
				completed: action.payload.completed
			};
		case PathTypes.SET_PAHTNAME:
			return {
				...state,
				whichIs: action.payload.pathname
			};
		default:
			return state;
	}
};

const PathProvider = ({ children }) => {
	const [state, dispatch] = useReducer(pathReducer, initialState);

	return (
		<PathContext.Provider value={{ state, dispatch }}>
			{children}
		</PathContext.Provider>
	);
};

const usePathContext = () => {
	return useContext(PathContext);
};

export { PathProvider, usePathContext };

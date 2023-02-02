import { useReducer, createContext, useContext } from 'react';

export const PathContext = createContext();

export const PATH_ACTIONS = {
	SET_COMPLETED: 0,
	SET_PAHTNAME: 1
};

const pathReducer = (state, action) => {
	switch (action.type) {
		case PATH_ACTIONS.SET_COMPLETED:
			return {
				...state,
				completed: action.completed
			};
		case PATH_ACTIONS.SET_PAHTNAME:
			return {
				...state,
				whichIs: action.pathname
			};
		default:
			return state;
	}
};

const PathProvider = ({ children }) => {
	const [state, dispatch] = useReducer(pathReducer, {
		whichIs: '',
		completed: null
	});

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

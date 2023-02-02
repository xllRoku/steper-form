import { useReducer } from 'react';
import { WhichStepContext } from './WhichStepContext';

export const WHICH_ACTIONS = {
	SET_COMPLETED: 0,
	SET_PAHTNAME: 1
};

const whichReducer = (state, action) => {
	switch (action.type) {
		case WHICH_ACTIONS.SET_COMPLETED:
			return {
				...state,
				completed: action.completed
			};
		case WHICH_ACTIONS.SET_PAHTNAME:
			return {
				...state,
				whichIs: action.pathname
			};
		default:
			return state;
	}
};

const WhichStepProvider = ({ children }) => {
	const [state, dispatch] = useReducer(whichReducer, {
		whichIs: '',
		completed: null
	});

	return (
		<WhichStepContext.Provider value={{ state, dispatch }}>
			{children}
		</WhichStepContext.Provider>
	);
};

export default WhichStepProvider;

import React, { useReducer } from 'react';
import { PlanContext } from './PlanContext';

const initialValue = {
	title: '',
	price: null,
	annuality: 'monthly'
};

export const PLAN_ACTIONS = {
	SET_PLAN: 0,
	CHANGE_PRICE: 1,
	SET_ANNUALITY: 2,
	REMOVE_PLAN: 3
};

const planReducer = (state, action) => {
	switch (action.type) {
		case PLAN_ACTIONS.SET_PLAN:
			return {
				...state,
				title: action.title,
				price: action.price
			};
		case PLAN_ACTIONS.CHANGE_PRICE:
			return {
				...state,
				price: action.newPrice
			};
		case PLAN_ACTIONS.SET_ANNUALITY:
			return {
				...state,
				annuality: action.annuality
			};
		case PLAN_ACTIONS.REMOVE_PLAN:
			return initialValue;
		default:
			return state;
	}
};

const PlanProvider = ({ children }) => {
	const [state, dispatch] = useReducer(planReducer, initialValue);

	return (
		<PlanContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			{children}
		</PlanContext.Provider>
	);
};

export default PlanProvider;

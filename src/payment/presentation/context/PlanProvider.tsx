import React, { useReducer, createContext, useContext } from 'react';
import { ActionMap } from '../lib/hooks/useForm';

export type InitialStateType = {
	title: string;
	price: number;
	annuality: string;
};

export enum PlanTypes {
	SET_PLAN = 'SET_PLAN',
	CHANGE_PRICE = 'CHANGE_PRICE',
	SET_ANNUALITY = 'SET_ANNUALITY',
	REMOVE_PLAN = 'REMOVE_PLAN'
}

type PlanPayload = {
	[PlanTypes.SET_PLAN]: {
		title: string;
		price: number;
	};
	[PlanTypes.CHANGE_PRICE]: {
		newPrice: number;
	};
	[PlanTypes.SET_ANNUALITY]: {
		annuality: string;
	};
	[PlanTypes.REMOVE_PLAN]: {};
};

const initialState = {
	title: '',
	price: 0,
	annuality: 'monthly'
};

export const PlanContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

type PlanActions = ActionMap<PlanPayload>[keyof ActionMap<PlanPayload>];

export const PLAN_ACTIONS = {
	SET_PLAN: 0,
	CHANGE_PRICE: 1,
	SET_ANNUALITY: 2,
	REMOVE_PLAN: 3
};

const planReducer = (state: InitialStateType, action: PlanActions) => {
	switch (action.type) {
		case PlanTypes.SET_PLAN:
			return {
				...state,
				title: action.payload.title,
				price: action.payload.price
			};
		case PlanTypes.CHANGE_PRICE:
			return {
				...state,
				price: action.payload.newPrice
			};
		case PlanTypes.SET_ANNUALITY:
			return {
				...state,
				annuality: action.payload.annuality
			};
		case PlanTypes.REMOVE_PLAN:
			return initialState;
		default:
			return state;
	}
};

const PlanProvider = ({ children }) => {
	const [state, dispatch] = useReducer(planReducer, initialState);

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

const usePlanContext = () => {
	return useContext(PlanContext);
};
export { PlanProvider, usePlanContext };

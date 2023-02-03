import React, { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { ActionMap } from '../lib/hooks/useForm';

type AddonType = {
	price: number;
	title: string;
};

export type InitialStateType = {
	addons: Array<AddonType>;
};

export enum AddonTypes {
	SET_ADDON = 'SET_ADDON',
	REMOVE_ADDON = 'REMOVE_ADDON'
}

type AddonPayload = {
	[AddonTypes.SET_ADDON]: {
		title: string;
		price: number;
	};
	[AddonTypes.REMOVE_ADDON]: {
		title: string;
	};
};

const initialState = {
	addons: []
};

const AddonContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<any>;
}>({
	state: initialState,
	dispatch: () => null
});

type AddonActions = ActionMap<AddonPayload>[keyof ActionMap<AddonPayload>];

const addonReducer = (state: InitialStateType, action: AddonActions) => {
	switch (action.type) {
		case AddonTypes.SET_ADDON:
			return {
				addons: [
					...state.addons,
					{ title: action.payload.title, price: action.payload.price }
				]
			};
		case AddonTypes.REMOVE_ADDON:
			return {
				addons: state.addons.filter(
					addon => addon.title !== action.payload.title
				)
			};
		default:
			return state;
	}
};

const AddonProvider = ({ children }) => {
	const [state, dispatch] = useReducer(addonReducer, initialState);

	return (
		<AddonContext.Provider value={{ state, dispatch }}>
			{children}
		</AddonContext.Provider>
	);
};

const useAddonContext = () => {
	return useContext(AddonContext);
};

export { AddonProvider, useAddonContext };

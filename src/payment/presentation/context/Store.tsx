import React, { createContext, useContext } from 'react';
import {
	AddonTypes,
	useAddonContext,
	InitialStateType as stateAddon
} from './AddonProvider';
import {
	PathTypes,
	usePathContext,
	InitialStateType as pathState
} from './PathProvider';
import {
	PlanTypes,
	usePlanContext,
	InitialStateType as planState
} from './PlanProvider';

type StoreType = {
	SET_PLAN: (payload: any) => void;
	CHANGE_PRICE: (payload: any) => void;
	SET_ANNUALITY: (payload: any) => void;
	REMOVE_PLAN: (payload: any) => void;
	SET_STEP_COMPLETED: (payload: any) => void;
	SET_PAHTNAME: (payload: any) => void;
	SET_ADDON: (payload: any) => void;
	REMOVE_ADDON: (payload: any) => void;
	plan: planState;
	addon: stateAddon;
	path: pathState;
};

const storeValue: any = {};

export const Store = createContext<{ state: StoreType }>({ state: storeValue });

const StoreProvider = ({ children }) => {
	const { state: plan, dispatch: dispatchPlan } = usePlanContext();
	const { state: addon, dispatch: dispatchAddon } = useAddonContext();
	const { state: path, dispatch: dispatchPath } = usePathContext();

	const contexts = [
		{
			state: plan,
			dispatch: dispatchPlan,
			actions: PlanTypes
		},
		{
			state: addon,
			dispatch: dispatchAddon,
			actions: AddonTypes
		},
		{
			state: path,
			dispatch: dispatchPath,
			actions: PathTypes
		}
	];

	const storeValue: StoreType = {};
	contexts.forEach(({ dispatch, actions }) => {
		Object.entries(actions).forEach(([actionName, actionType]) => {
			storeValue[`${actionName}`] = payload => {
				dispatch({ type: actionType, ...payload });
			};
		});
	});

	const {
		SET_PLAN,
		CHANGE_PRICE,
		SET_ANNUALITY,
		REMOVE_PLAN,
		SET_ADDON,
		REMOVE_ADDON,
		SET_STEP_COMPLETED,
		SET_PAHTNAME
	} = storeValue;

	return (
		<Store.Provider
			value={{
				SET_PLAN,
				CHANGE_PRICE,
				SET_ANNUALITY,
				REMOVE_PLAN,
				SET_STEP_COMPLETED,
				SET_PAHTNAME,
				SET_ADDON,
				REMOVE_ADDON,
				plan,
				addon,
				path
			}}
		>
			{children}
		</Store.Provider>
	);
};

const useStore = () => {
	return useContext(Store);
};

export { StoreProvider, useStore };

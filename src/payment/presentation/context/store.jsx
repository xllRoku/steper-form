import React, { createContext, useContext } from 'react';
import { ADDON_ACTIONS, useAddonContext } from './addon/AddonProvider';
import { PATH_ACTIONS, usePathContext } from './path/PathProvider';
import { PLAN_ACTIONS, usePlanContext } from './plan/PlanProvider';

export const Store = createContext();

const StoreProvider = ({ children }) => {
	const { state: plan, dispatch: dispatchPlan } = usePlanContext();
	const { state: addon, dispatch: dispatchAddon } = useAddonContext();
	const { state: path, dispatch: dispatchPath } = usePathContext();

	const contexts = [
		{
			state: plan,
			dispatch: dispatchPlan,
			actions: PLAN_ACTIONS
		},
		{
			state: addon,
			dispatch: dispatchAddon,
			actions: ADDON_ACTIONS
		},
		{
			state: path,
			dispatch: dispatchPath,
			actions: PATH_ACTIONS
		}
	];

	const storeValue = {};
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
		SET_STEP_COMPLETED,
		SET_PAHTNAME,
		SET_ADDON,
		REMOVE_ADDON
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
				REMOVE_ADDON
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

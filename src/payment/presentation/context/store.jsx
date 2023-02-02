import React, { createContext, useContext } from 'react';
import { ADDON_ACTIONS, useAddonContext } from './addon/AddonProvider';
import { PATH_ACTIONS, usePathContext } from './path/PathProvider';
import { PLAN_ACTIONS, usePlanContext } from './plan/PlanProvider';

export const Store = createContext();

const StoreProvider = ({ children }) => {
	const { state: plan, dispatch: dispatchPlan } = usePlanContext();
	const { state: addon, dispatch: dispatchAddon } = useAddonContext();
	const { state: path, dispatch: dispatchPath } = usePathContext();

	const storeValue = {
		plan,
		setPlan: (title, price) => {
			dispatchPlan({ type: PLAN_ACTIONS.SET_PLAN, title, price });
		},
		changePrice: newPrice => {
			dispatchPlan({ type: PLAN_ACTIONS.CHANGE_PRICE, newPrice });
		},
		setAnnuality: annuality => {
			dispatchPlan({ type: PLAN_ACTIONS.SET_ANNUALITY, annuality });
		},
		removePlan: () => dispatchPlan({ type: PLAN_ACTIONS.REMOVE_PLAN }),
		addon,
		setAddon: (title, price) => {
			dispatchAddon({ type: ADDON_ACTIONS.SET_ADDON, title, price });
		},
		removeAddon: title => {
			dispatchAddon({ type: ADDON_ACTIONS.REMOVE_ADDON, title });
		},
		path,
		setStepCompleted: completed => {
			dispatchPath({ type: PATH_ACTIONS.SET_COMPLETED, completed });
		},
		setPathName: pathname => {
			dispatchPath({ type: PATH_ACTIONS.SET_PAHTNAME, pathname });
		}
	};

	const {
		setPlan,
		changePrice,
		setAnnuality,
		removePlan,
		setAddon,
		removeAddon,
		setStepCompleted,
		setPathName
	} = storeValue;

	return (
		<Store.Provider
			value={{
				plan,
				setPlan,
				changePrice,
				setAnnuality,
				removePlan,
				addon,
				setAddon,
				removeAddon,
				path,
				setStepCompleted,
				setPathName
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

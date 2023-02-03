import { createContext, useContext } from 'react';
import { useReducer } from 'react';

const AddonContext = createContext();

const initialState = {
	addons: []
};

export const ADDON_ACTIONS = {
	SET_ADDON: 0,
	REMOVE_ADDON: 1
};

const addonReducer = (state, action) => {
	switch (action.type) {
		case ADDON_ACTIONS.SET_ADDON:
			console.log(action.title, action.price);
			return {
				addons: [
					...state.addons,
					{ title: action.title, price: action.price }
				]
			};
		case ADDON_ACTIONS.REMOVE_ADDON:
			return {
				addons: state.addons.filter(
					addon => addon.title !== action.title
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

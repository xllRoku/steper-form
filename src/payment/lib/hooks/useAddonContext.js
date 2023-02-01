import { useContext } from 'react';
import { AddonContext } from '../../context/addon/AddonContext';

export const useAddonContext = () => {
	return useContext(AddonContext);
};

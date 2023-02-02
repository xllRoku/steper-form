import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WHICH_ACTIONS } from '../../context/step/WhichStepProvider';
import useWhichContext from './useWhichContext';

const useSetLocation = () => {
	const location = useLocation();
	const { dispatch } = useWhichContext();
	const pathname = location.pathname;

	useEffect(() => {
		dispatch({ type: WHICH_ACTIONS.SET_PAHTNAME, pathname });
	}, []);
};

export default useSetLocation;

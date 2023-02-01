import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWhichContext from './useWhichContext';

const useSetLocation = () => {
	const location = useLocation();
	const { setActualStep } = useWhichContext();

	useEffect(() => {
		setActualStep(prev => ({ ...prev, whichIs: location.pathname }));
	}, []);
};

export default useSetLocation;

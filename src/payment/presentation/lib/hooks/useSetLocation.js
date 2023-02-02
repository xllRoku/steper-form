import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../context/store';

const useSetLocation = () => {
	const location = useLocation();
	const { SET_PAHTNAME } = useStore();
	const pathname = location.pathname;

	useEffect(() => {
		SET_PAHTNAME({ pathname });
	}, []);
};

export default useSetLocation;

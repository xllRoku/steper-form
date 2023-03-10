import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../context/Store';

const useSetLocation = () => {
	const location = useLocation();
	const { SET_PAHTNAME } = useStore();
	const pathname = location.pathname;

	useEffect(() => {
		SET_PAHTNAME({ payload: { pathname } });
	}, []);
};

export default useSetLocation;

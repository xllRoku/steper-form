import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../context/store';

const useSetLocation = () => {
	const location = useLocation();
	const { setPathName } = useStore();
	const pathname = location.pathname;

	useEffect(() => {
		setPathName(pathname);
	}, []);
};

export default useSetLocation;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../context/Store';

const useSetLocation = () => {
	const location = useLocation();
};

export default useSetLocation;

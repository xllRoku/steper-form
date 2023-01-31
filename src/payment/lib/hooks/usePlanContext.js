import { useContext } from 'react';
import { PlanContext } from '../../context/Plan/PlanContext';

const usePlanContext = () => {
	return useContext(PlanContext);
};

export { usePlanContext };

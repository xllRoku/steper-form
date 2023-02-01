import { useContext } from 'react';
import { PlanContext } from '../../context/plan/PlanContext';

const usePlanContext = () => {
	return useContext(PlanContext);
};

export { usePlanContext };

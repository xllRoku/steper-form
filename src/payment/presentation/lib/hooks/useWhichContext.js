import { useContext } from 'react';
import { WhichStepContext } from '../../context/step/WhichStepContext';

const useWhichContext = () => {
	return useContext(WhichStepContext);
};

export default useWhichContext;

import { useState } from 'react';
import { WhichStepContext } from './WhichStepContext';

const WhichStepProvider = ({ children }) => {
	const [actualStep, setActualStep] = useState({
		whichIs: '',
		completed: null
	});
	return (
		<WhichStepContext.Provider value={{ actualStep, setActualStep }}>
			{children}
		</WhichStepContext.Provider>
	);
};

export default WhichStepProvider;

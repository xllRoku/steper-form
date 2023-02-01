import { useState } from 'react';
import { WhichStepContext } from './WhichStepContext';

const WhichStepProvider = ({ children }) => {
	const [actualStep, setAcutualStep] = useState({});
	return (
		<WhichStepContext.Provider value={{ actualStep, setAcutualStep }}>
			{children}
		</WhichStepContext.Provider>
	);
};

export default WhichStepProvider;

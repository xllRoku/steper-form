import React, { useState } from 'react';
import { PlanContext } from './PlanContext';

const PlanProvider = ({ children }) => {
	const [infoPlan, setInfoPlan] = useState({
		title: '',
		price: null,
		annuality: 'monthly'
	});

	return (
		<PlanContext.Provider
			value={{
				infoPlan,
				setInfoPlan
			}}
		>
			{children}
		</PlanContext.Provider>
	);
};

export default PlanProvider;

import React, { useState } from 'react';
import { PlanContext } from './PlanContext';

const PlanProvider = ({ children }) => {
	const [planSelected, setPlanSelected] = useState();

	return (
		<PlanContext.Provider
			value={{
				planSelected,
				setPlanSelected
			}}
		>
			{children}
		</PlanContext.Provider>
	);
};

export default PlanProvider;

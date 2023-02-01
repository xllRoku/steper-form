import React, { useState } from 'react';
import { AddonContext } from './AddonContext';

const AddonProvider = ({ children }) => {
	const [addons, setAddons] = useState([]);

	return (
		<AddonContext.Provider value={{ addons, setAddons }}>
			{children}
		</AddonContext.Provider>
	);
};

export default AddonProvider;

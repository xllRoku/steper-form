import React from 'react';

interface IWhenProps {
	children: React.ReactNode;
	predicate: boolean | string | undefined;
}

const When: React.FC<IWhenProps> = ({ children, predicate }) => {
	return !predicate ? <></> : <>{children}</>;
};

export default When;

import React from 'react';

interface IThenProps {
	predicate: boolean;
	children: React.ReactNode;
}

export const Then: React.FC<IThenProps> = ({ predicate, children }) => {
	return predicate ? <> {children} </> : <></>;
};

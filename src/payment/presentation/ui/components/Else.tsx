import React from 'react';

interface IElseProps {
	predicate: boolean;
	children: React.ReactNode;
}

export const Else: React.FC<IElseProps> = ({ predicate, children }) => {
	return !predicate ? <> {children} </> : <></>;
};

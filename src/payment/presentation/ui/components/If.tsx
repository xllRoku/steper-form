import React from 'react';

interface IfProps {
	predicate: boolean;
	children: React.ReactNode;
}

export const If: React.FC<IfProps> = ({ predicate, children }) => {
	const childrenArray = React.Children.toArray(children);

	return (
		<>
			{childrenArray.map(child => {
				return React.cloneElement(child as React.ReactElement, {
					predicate
				});
			})}
		</>
	);
};

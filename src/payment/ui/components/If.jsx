import React from 'react';

export const If = ({ predicate, children }) => {
	return React.Children.map(children, child => {
		return React.cloneElement(child, { predicate });
	});
};

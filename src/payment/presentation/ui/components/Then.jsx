export const Then = ({ predicate, children }) => {
	return predicate ? <> {children} </> : <></>;
};

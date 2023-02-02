export const Else = ({ predicate, children }) => {
	return !predicate ? <> {children} </> : <></>;
};

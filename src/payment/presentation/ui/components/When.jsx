const When = ({ children, predicate }) => {
	return !predicate ? <></> : <>{children}</>;
};

export default When;

import { useReducer } from 'react';
import { formReducer, FORM_ACTIONS } from '../reducers/form.reducer';

export const useForm = (initialValues, validationRules) => {
	const [formState, dispatch] = useReducer(formReducer, {
		values: initialValues,
		errors: {},
		completed: false
	});

	const { completed, errors } = formState;

	const handleOnChange = e => {
		const { name, value } = e.target;
		dispatch({ type: FORM_ACTIONS.HANDLE_CHANGE_INPUT, name, value });
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		dispatch({ type: FORM_ACTIONS.SUBMIT, validationRules });
	};

	return { completed, errors, handleOnChange, handleOnSubmit };
};

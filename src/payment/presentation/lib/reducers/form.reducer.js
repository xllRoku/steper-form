export const FORM_ACTIONS = {
	SUBMIT: 0,
	HANDLE_CHANGE_INPUT: 1
};

export const formReducer = (state, action) => {
	switch (action.type) {
		case FORM_ACTIONS.HANDLE_CHANGE_INPUT:
			return {
				...state,
				values: { ...state.values, [action.name]: action.value }
			};
		case FORM_ACTIONS.SUBMIT:
			const errors = validate(state.values, action.validationRules);
			return {
				...state,
				errors,
				completed: !Object.values(errors).length
			};
		default:
			return state;
	}
};

const validate = (values, validationRules) => {
	const errors = {};

	Object.keys(validationRules).forEach(field => {
		if (validationRules[field].required && !values[field]) {
			errors[field] = validationRules[field].errorMessage.generic;
		} else if (
			validationRules[field].pattern &&
			!validationRules[field].pattern.test(values[field])
		) {
			errors[field] = validationRules[field].errorMessage.unique;
		}
	});
	return errors;
};

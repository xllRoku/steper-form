import { useReducer } from 'react';

export type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

enum Types {
	SUBMIT = 'SUBMIT',
	HANDLE_CHANGE_INPUT = 'HANDLE_CHANGE_INPUT'
}

type FormPayload = {
	[Types.SUBMIT]: {
		validationRules: IValidationRules;
	};
	[Types.HANDLE_CHANGE_INPUT]: {
		name: string;
		value: string;
	};
};

type FormActions = ActionMap<FormPayload>[keyof ActionMap<FormPayload>];

export const FORM_ACTIONS = {
	SUBMIT: 'SUBMIT',
	HANDLE_CHANGE_INPUT: 'HANDLE_CHANGE_INPUT'
};

interface IFormValues {
	[key: string]: string;
}

interface IValidationRules {
	[key: string]: {
		required: boolean;
		pattern: RegExp;
		errorMessage: {
			generic: string;
			unique?: string;
		};
	};
}

interface IFormState {
	values: IFormValues;
	errors: { [key: string]: string | undefined };
	completed: boolean | null;
}

const validate = (values: IFormValues, validationRules: IValidationRules) => {
	const errors = {} as IFormState['errors'];

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

export const formReducer = (state: IFormState, action: FormActions) => {
	switch (action.type) {
		case Types.HANDLE_CHANGE_INPUT:
			return {
				...state,
				values: {
					...state.values,
					[action.payload.name]: action.payload.value
				}
			};
		case Types.SUBMIT:
			const errors = validate(
				state.values,
				action.payload.validationRules
			);
			return {
				...state,
				errors,
				completed: !Object.values(errors).length
			};
		default:
			return state;
	}
};

export const useForm = (
	initialValues: IFormValues,
	validationRules: IValidationRules
) => {
	const [formState, dispatch] = useReducer(formReducer, {
		values: initialValues,
		errors: {},
		completed: null
	});
	const { completed, errors } = formState;

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		dispatch({ type: Types.HANDLE_CHANGE_INPUT, payload: { name, value } });
	};

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch({
			type: Types.SUBMIT,
			payload: { validationRules }
		});
	};

	return { completed, errors, handleOnChange, handleOnSubmit };
};

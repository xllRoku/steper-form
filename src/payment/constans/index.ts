import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import iconPro from '../../assets/images/icon-pro.svg';

export const ROUTES = {
	YOUR_INFO: '/payment/personal-info',
	SELECT_PLAN: '/payment/select-plan',
	ADD_ONS: '/payment/add-ons',
	SUMMARY: '/payment/summary'
};

export const STEPS = [
	{
		stepNumber: '1',
		title: 'your info',
		url: ROUTES.YOUR_INFO
	},
	{
		stepNumber: '2',
		title: 'select plan',
		url: ROUTES.SELECT_PLAN
	},
	{
		stepNumber: '3',
		title: 'add-ons',
		url: ROUTES.ADD_ONS
	},
	{
		stepNumber: '4',
		title: 'summary',
		url: ROUTES.SUMMARY
	}
];

export const PLANS = [
	{
		title: 'arcade',
		prices: [
			{ annuality: 'monthly', price: 9 },
			{ annuality: 'yearly', price: 90 }
		],
		image: arcade
	},
	{
		title: 'advanced',
		prices: [
			{ annuality: 'monthly', price: 12 },
			{ annuality: 'yearly', price: 120 }
		],
		image: advanced
	},
	{
		title: 'pro',
		prices: [
			{ annuality: 'monthly', price: 15 },
			{ annuality: 'yearly', price: 150 }
		],
		image: iconPro
	}
];

export const ADDOS = [
	{
		title: 'Online service',
		content: 'Access to multiplaer games',
		prices: [
			{ price: 1, annuality: 'monthly' },
			{ price: 10, annuality: 'yearly' }
		]
	},
	{
		title: 'Larger storage',
		content: 'Extra 1TB of cloud save',
		prices: [
			{ price: 2, annuality: 'monthly' },
			{ price: 20, annuality: 'yearly' }
		]
	},
	{
		title: 'Customizable profile',
		content: 'Custom theme on your profile',
		prices: [
			{ price: 2, annuality: 'monthly' },
			{ price: 20, annuality: 'yearly' }
		]
	}
];

export const ANNUALITY = {
	MONTHLY: 'monthly',
	YEARLY: 'yearly'
};

export const FORM_NAMES = {
	NAME: 'name',
	EMAIL: 'email',
	PHONE: 'phone'
};

export const initialValues = {
	name: '',
	email: '',
	phone: ''
};

export const validationRules = {
	name: {
		required: true,
		pattern: /^([A-Z\-\s\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]){2,30}$/i,
		errorMessage: {
			generic: 'This field is required',
			unique: 'El nombre no es válido'
		}
	},
	email: {
		required: true,
		pattern:
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		errorMessage: {
			generic: 'This field is required',
			unique: 'El correo electrónico no es válido'
		}
	},
	phone: {
		required: true,
		pattern: /^\d{10,}$/,
		errorMessage: {
			generic: 'This field is required',
			unique: 'El numero de celular debe tener  10 caracteres'
		}
	}
};

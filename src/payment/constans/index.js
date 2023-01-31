import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import iconPro from '../../assets/images/icon-pro.svg';

export const STEPS = [
	{
		stepNumber: '1',
		title: 'your info'
	},
	{
		stepNumber: '2',
		title: 'select plan'
	},
	{
		stepNumber: '3',
		title: 'add-ons'
	},
	{
		stepNumber: '4',
		title: 'summary'
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

import Addons from '../molecules/Addons';

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

const PickAddons = () => {
	return (
		<>
			<h2 className='font-bold text-marine-blue text-4xl'>
				Pick add-ons
			</h2>
			<p className='text-cool-gray'>
				Add-ons help enhance your gaming experience.
			</p>
			<div>
				<div className='flex flex-col gap-6 mt-6'>
					{ADDOS.map(addon => (
						<Addons addon={addon} />
					))}
				</div>
			</div>
		</>
	);
};

export default PickAddons;

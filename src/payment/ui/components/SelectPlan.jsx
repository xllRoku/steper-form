import Plan from '../molecules/Plan';
import arcade from '../../../assets/images/icon-arcade.svg';
import advanced from '../../../assets/images/icon-advanced.svg';
import iconPro from '../../../assets/images/icon-pro.svg';
import Switch from '../molecules/Switch';

const PLANS = [
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

const SelectPlan = () => {
	return (
		<>
			<h2 className='font-bold text-marine-blue text-4xl'>
				Select your plan
			</h2>
			<p className='text-cool-gray'>
				You have the option of monthly or yearly billing
			</p>
			<form className='flex flex-col  gap-6 mt-6'>
				<div className='flex gap-6'>
					{PLANS.map(plan => (
						<Plan plan={plan} />
					))}
				</div>
				<div className='flex gap-6 justify-center items-center bg-magnolia p-4 rounded-md'>
					<p className='text-marine-blue font-bold capitalize'>
						monthly
					</p>
					<Switch />
					<p className='text-marine-blue font-bold capitalize'>
						yearly
					</p>
				</div>
			</form>
		</>
	);
};

export default SelectPlan;

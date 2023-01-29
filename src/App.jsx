import sideBar from './assets/images/bg-sidebar-desktop.svg';

import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import iconPro from './assets/images/icon-pro.svg';

const STEPS = [
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

const Step = ({ step }) => {
	const { stepNumber, title } = step;

	return (
		<div className='flex gap-4 mx-auto w-[200px] items-center'>
			<span className='w-9 h-9 border-[1px] border-white  rounded-full flex items-center justify-center font-bold text-white'>
				{stepNumber}
			</span>
			<div>
				<span className='uppercase  text-light-gray text-sm'>
					step {stepNumber}
				</span>
				<p className='uppercase text-white font-bold'> {title} </p>
			</div>
		</div>
	);
};

const InputText = ({ label, name }) => {
	return (
		<label className='flex flex-col'>
			<div className='flex justify-between capitalize text-marine-blue  text-sm'>
				<span className='font-medium'>{label}</span>
			</div>
			<input
				type='text'
				className='p-2 rounded-lg border-[1px] hover:border-purplish-blue focus:border-purplish-blue'
				name={name}
			/>
		</label>
	);
};
const PersonalInfo = () => {
	return (
		<>
			<header>
				<h2 className='font-bold text-marine-blue text-4xl'>
					Personal info
				</h2>
				<p className='text-cool-gray'>
					Please provide your name, email address, and phone number.
				</p>
			</header>
			<form className=' mt-10'>
				<div className='space-y-6'>
					<div>
						<InputText label='name' />
					</div>
					<div>
						<InputText label='email address' />
					</div>
					<div>
						<InputText label='phone number' />
					</div>
				</div>
			</form>
		</>
	);
};

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

const Plan = ({ plan }) => {
	const price = plan.prices[0].price;
	const { title, image } = plan;
	return (
		<button
			className='w-40 h-44  focus:border-purplish-blue focus:bg-light-blue hover:border-purplish-blue border-[1px]  border-gray-400 p-4 rounded-md flex flex-col justify-between'
			name='plan'
		>
			<img src={image} alt='' />
			<div className='flex flex-col items-start'>
				<p className='font-bold text-marine-blue capitalize'>{title}</p>
				<span> ${price}/mo </span>
			</div>
		</button>
	);
};

const Switch = () => {
	return <div>hello world two</div>;
};

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
					//TODO switch
					<Switch />
					<p className='text-marine-blue font-bold capitalize'>
						yearly
					</p>
				</div>
			</form>
		</>
	);
};

function App() {
	return (
		<main className='h-screen flex justify-center items-center'>
			<div className='flex  bg-white p-4  rounded-md'>
				<div className='relative '>
					<img src={sideBar} alt='' />
					<div className='w-full absolute top-0 space-y-6 mt-8'>
						{STEPS.map(step => (
							<Step step={step} />
						))}
					</div>
				</div>
				<div className='pt-8 px-20'>
					<PersonalInfo />
				</div>
			</div>
		</main>
	);
}

export default App;

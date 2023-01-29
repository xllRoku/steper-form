import sideBar from './assets/images/bg-sidebar-desktop.svg';

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
		<div className='pt-8 px-20'>
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
		</div>
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
				<PersonalInfo />
			</div>
		</main>
	);
}

export default App;

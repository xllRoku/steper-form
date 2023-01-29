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
			<span className='w-9 h-9 border-[1px] border-white  rounded-full flex items-center justify-center font-bold'>
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

function App() {
	return (
		<main className='h-screen flex justify-center items-center'>
			<div className='relative '>
				<img src={sideBar} alt='' />
				<div className='w-full absolute top-0 space-y-6 mt-8'>
					{STEPS.map(step => (
						<Step step={step} />
					))}
				</div>
			</div>
		</main>
	);
}

export default App;

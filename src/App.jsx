import sideBar from './assets/images/bg-sidebar-desktop.svg';
import PersonalInfo from './payment/ui/components/PersonalInfo';
import SelectPlan from './payment/ui/components/SelectPlan';
import Step from './payment/ui/molecules/Step';

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
					<SelectPlan />
				</div>
			</div>
		</main>
	);
}

export default App;

import { STEPS } from './payment/constans';
import sideBar from './assets/images/bg-sidebar-desktop.svg';
import Step from './payment/ui/molecules/Step';
import PersonalInfo from './payment/ui/components/PersonalInfo';
import SelectPlan from './payment/ui/components/SelectPlan';
import PickAddons from './payment/ui/components/PickAddons';
import Summary from './payment/ui/components/Summary';

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
					<Summary />
				</div>
			</div>
		</main>
	);
}

export default App;

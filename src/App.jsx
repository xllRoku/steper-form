import { STEPS } from './payment/constans';
import sideBar from './assets/images/bg-sidebar-desktop.svg';
import Step from './payment/ui/molecules/Step';
import PersonalInfo from './payment/ui/views/PersonalInfo';
import PickAddons from './payment/ui/views/PickAddons';
import Summary from './payment/ui/views/Summary';
import { PlanMemoryService } from './payment/domain/services/PlanMemory.service';
import { SelectPlanFactory } from './payment/ui/views/SelectPlan';
import PlanProvider from './payment/context/Plan/PlanProvider';
import { AddonMemoryService } from './payment/domain/services/AddonMemory.service';
import PickAddonsFactory from './payment/ui/views/PickAddons';

const planService = PlanMemoryService();
const SelectPlanView = SelectPlanFactory(planService);
const addonService = AddonMemoryService();
const PickAddonView = PickAddonsFactory(addonService);

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
					<PlanProvider>
						<SelectPlanView />
					</PlanProvider>
				</div>
			</div>
		</main>
	);
}

export default App;

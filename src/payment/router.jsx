import { Route, Routes } from 'react-router-dom';
import AddonProvider from './context/addon/AddonProvider';
import PlanProvider from './context/plan/PlanProvider';
import Summary from './ui/views/Summary';
import PersonalInfoView from './ui/views/PersonalInfoView';
import { SelectPlanFactory } from './ui/views/SelectPlan';
import { PlanMemoryService } from './domain/services/PlanMemory.service';
import { AddonMemoryService } from './domain/services/AddonMemory.service';
import PickAddonsFactory from './ui/views/PickAddons';
import WhichStepProvider from './context/step/WhichStepProvider';

const planService = PlanMemoryService();
const SelectPlanView = SelectPlanFactory(planService);
const addonService = AddonMemoryService();
const PickAddonsView = PickAddonsFactory(addonService);

export const PaymentRouter = () => {
	return (
		<WhichStepProvider>
			<PlanProvider>
				<AddonProvider>
					<Routes>
						<Route
							path='/payment/'
							element={<Layout />}
						>
							<Route
								path='personal-info'
								element={<PersonalInfoView />}
							/>
							<Route
								path='select-plan'
								element={<SelectPlanView />}
							/>
							<Route
								path='add-ons'
								element={<PickAddonsView />}
							/>
							<Route
								path='summary'
								element={<Summary />}
							/>
						</Route>
					</Routes>
				</AddonProvider>
			</PlanProvider>
		</WhichStepProvider>
	);
};

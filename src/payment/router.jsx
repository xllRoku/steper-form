import { Route, Routes } from 'react-router-dom';
import { AddonMemoryService } from './domain/services/AddonMemory.service';
import { PlanMemoryService } from './domain/services/PlanMemory.service';
import AddonProvider from './presentation/context/addon/AddonProvider';
import PlanProvider from './presentation/context/plan/PlanProvider';
import WhichStepProvider from './presentation/context/step/WhichStepProvider';
import Layout from './presentation/ui/layouts/Layout';
import PersonalInfoView from './presentation/ui/views/PersonalInfoView';
import PickAddonsFactory from './presentation/ui/views/PickAddons';
import { SelectPlanFactory } from './presentation/ui/views/SelectPlan';
import SummaryView from './presentation/ui/views/Summary';

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
						<Route path='/payment/' element={<Layout />}>
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
							<Route path='summary' element={<SummaryView />} />
						</Route>
					</Routes>
				</AddonProvider>
			</PlanProvider>
		</WhichStepProvider>
	);
};

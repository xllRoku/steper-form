import Plan from '../molecules/Plan';
import Switch from '../molecules/Switch';
import { useEffect, useState } from 'react';

const SelectPlanFactory = planService => {
	return function SelectPlanView() {
		const [plans, setPlans] = useState([]);

		useEffect(() => {
			(async () => {
				const data = await planService.getPlan();
				setPlans(data);
			})();
		}, []);

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
						{plans.map(plan => (
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
};

export { SelectPlanFactory };

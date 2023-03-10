import React from 'react';
import { If } from '../components/If';
import { Then } from '../components/Then';
import { Else } from '../components/Else';
import StepperController from '../components/StepperController';
import Plan from '../molecules/Plan';
import useSetLocation from '../../lib/hooks/useSetLocation';
import Switch from '../components/Switch';
import { useStore } from '../../context/Store';
import { IPlanService } from '../../../domain/services/PlanMemory.service';
import { useFetch } from '../../lib/hooks/useFetch';
import { planApiMapper } from '../../lib/mappers/planApi.mapper';

const SelectPlanFactory = (planService: IPlanService) => {
	return function SelectPlanView() {
		useSetLocation();
		const { SET_STEP_COMPLETED, plan: planInfo } = useStore();
		const fetchData = () => planService.getPlan();
		const { data: plansApi, loading } = useFetch(fetchData);
		const plans = planApiMapper(plansApi, planInfo.annuality);

		const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			if (planInfo.title) {
				const completed = true;
				SET_STEP_COMPLETED({ payload: { completed } });
			}
		};

		return (
			<>
				<h2 className='font-bold text-marine-blue text-4xl'>
					Select your plan
				</h2>
				<p className='text-cool-gray'>
					You have the option of monthly or yearly billing
				</p>
				<form
					className='flex flex-col  gap-6 mt-6'
					onSubmit={handleOnSubmit}
				>
					<div className='flex gap-6'>
						<If predicate={loading}>
							<Then predicate={loading}>
								<Skeleton />
							</Then>
							<Else predicate={loading}>
								{plans.map(plan => (
									<Plan key={plan.title} plan={plan} />
								))}
							</Else>
						</If>
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
					<StepperController />
				</form>
			</>
		);
	};
};

const Skeleton = () => {
	const COUNTER = 3;

	return (
		<>
			{Array(COUNTER).fill(
				<button className='w-40 h-44  border-[1px]   p-4 rounded-md flex flex-col justify-between '>
					<div className='w-[40px] h-[42px]  rounded-full loader' />
					<div className='flex flex-col items-start'>
						<p
							className='w-[80px] h-[16px] 
				rounded-full mb-2 loader'
						></p>
						<span className='w-[52px] h-[16px]  rounded-full loader'></span>
					</div>
				</button>
			)}
		</>
	);
};

export { SelectPlanFactory };

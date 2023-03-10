import React from 'react';
import useSetLocation from '../../lib/hooks/useSetLocation';
import { Else } from '../components/Else';
import { If } from '../components/If';
import { Then } from '../components/Then';
import StepperController from '../components/StepperController';
import Addons from '../molecules/Addons';
import { useStore } from '../../context/Store';
import { IAddonService } from '../../../domain/services/AddonMemory.service';
import { useFetch } from '../../lib/hooks/useFetch';
import { addonApiMapper } from '../../lib/mappers/addonApi.mapper';

const PickAddonsFactory = (addonService: IAddonService) => {
	return function PickAddonsView() {
		useSetLocation();
		const {
			addon: addonsInfo,
			SET_STEP_COMPLETED,
			plan: planInfo
		} = useStore();
		const fetchData = () => addonService.getAddon();
		const { data: addonsApi, loading } = useFetch(fetchData);
		const addons = addonApiMapper(addonsApi, planInfo.annuality);

		const handleOnSumbit = (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			const completed = true;
			if (addonsInfo.addons.length !== 0)
				SET_STEP_COMPLETED({ payload: { completed } });
		};

		return (
			<>
				<h2 className='font-bold text-marine-blue text-4xl'>
					Pick add-ons
				</h2>
				<p className='text-cool-gray'>
					Add-ons help enhance your gaming experience.
				</p>
				<div>
					<form
						className='flex flex-col gap-6 mt-6'
						onSubmit={handleOnSumbit}
					>
						<If predicate={loading}>
							<Then predicate={loading}>
								<Skeleton />
							</Then>
							<Else predicate={loading}>
								{addons.map(addon => (
									<Addons key={addon.title} addon={addon} />
								))}
							</Else>
						</If>
						<StepperController />
					</form>
				</div>
			</>
		);
	};
};

const Skeleton = () => {
	const COUNTER = 3;
	return (
		<>
			{Array(COUNTER).fill(
				<div className='w-[480px] h-[80px] flex justify-between items-center border-[1px] border-black p-4 rounded-md '>
					<div className='w-full flex  items-center gap-6 justify-between'>
						<div className='flex items-center gap-4'>
							<div className='w-4 h-4  loader ' />
							<div className='flex flex-col '>
								<h3 className='w-[190px] h-[18px]   rounded-full loader mb-2'></h3>
								<span className='w-[215px] h-[18px]   rounded-full loader'></span>
							</div>
						</div>
						<span className='w-12 h-5 loader rounded-full'></span>
					</div>
				</div>
			)}
		</>
	);
};

export default PickAddonsFactory;

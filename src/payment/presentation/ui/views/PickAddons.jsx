import { useEffect, useState } from 'react';
import { usePlanContext } from '../../lib/hooks/usePlanContext';
import { useAddonContext } from '../../lib/hooks/useAddonContext';
import useSetLocation from '../../lib/hooks/useSetLocation';
import useWhichContext from '../../lib/hooks/useWhichContext';
import { Else } from '../components/Else';
import { If } from '../components/If';
import { Then } from '../components/Then';
import StepperController from '../components/StepperController';
import Addons from '../molecules/Addons';
import { WHICH_ACTIONS } from '../../context/step/WhichStepProvider';
import { getAddonsByAnnuality } from '../../lib/utils/getAddonsByAnnuality';

const PickAddonsFactory = addonService => {
	return function PickAddonsView() {
		useSetLocation();
		const { state: addonsCtx } = useAddonContext();
		const { dispatch } = useWhichContext();
		const { state: infoPlan } = usePlanContext();
		const [addonsApi, setAddos] = useState({
			addons: [],
			loading: true
		});

		const addons = getAddonsByAnnuality(
			addonsApi.addons,
			infoPlan.annuality
		);

		useEffect(() => {
			(async () => {
				const data = await addonService.getAddon();
				setAddos(prev => ({
					...prev,
					addons: data,
					loading: false
				}));
			})();
		}, []);

		const handleOnSumbit = event => {
			event.preventDefault();
			const completed = true;
			if (addonsCtx.addons.length !== 0)
				dispatch({ type: WHICH_ACTIONS.SET_COMPLETED, completed });
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
						<If predicate={addonsApi.loading}>
							<Then>
								<Skeleton />
							</Then>
							<Else>
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
	return Array(COUNTER).fill(
		<div className='w-[480px] h-[80px] flex justify-between items-center border-[1px] border-black p-4 rounded-md '>
			<div className='w-full flex  items-center gap-6 justify-between'>
				<div className='flex items-center gap-4'>
					<div className='w-4 h-4  loader ' name='skeleton' />
					<div className='flex flex-col '>
						<h3 className='w-[190px] h-[18px]   rounded-full loader mb-2'></h3>
						<span className='w-[215px] h-[18px]   rounded-full loader'></span>
					</div>
				</div>
				<span className='w-12 h-5 loader rounded-full'></span>
			</div>
		</div>
	);
};

export default PickAddonsFactory;
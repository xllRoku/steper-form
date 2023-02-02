import { useState } from 'react';
import { ANNUALITY } from '../../../constans';
import { ADDON_ACTIONS } from '../../context/addon/AddonProvider';
import { useAddonContext } from '../../lib/hooks/useAddonContext';
import { usePlanContext } from '../../lib/hooks/usePlanContext';
import When from '../components/When';

const Addons = ({ addon }) => {
	const { state: infoPlan } = usePlanContext();
	const { state: stateAddons, dispatch } = useAddonContext();
	const [selectedAddon, setSelectedAddon] = useState(null);
	const { title, content, price } = addon;
	const isMonthly = infoPlan.annuality === ANNUALITY.MONTHLY;
	const isYearly = infoPlan.annuality === ANNUALITY.YEARLY;

	const findAddon = addons => addons?.find(addon => addon.title === title);

	const handleAddonSelection = (title, price, checked) => {
		if (checked) {
			dispatch({ type: ADDON_ACTIONS.SET_ADDON, title, price });
		} else {
			dispatch({ type: ADDON_ACTIONS.REMOVE_ADDON, title });
		}
	};

	const handleOnChange = event => {
		const checked = event.target.checked;
		const exists = findAddon(stateAddons.addons);
		handleAddonSelection(title, price, checked && !exists);
		setSelectedAddon(!selectedAddon);
	};

	return (
		<div
			className={`w-[480px] flex justify-between items-center border-[1px] border-black p-4 rounded-md
			${selectedAddon ? 'bg-light-blue border-purplish-blue' : ''}
			`}
		>
			<div className='w-full flex  items-center gap-6 justify-between'>
				<div className='flex items-center gap-4'>
					<input
						type='checkbox'
						className='w-4 h-4'
						name={title}
						onChange={handleOnChange}
					/>
					<div className='flex flex-col '>
						<h3 className='text-marine-blue font-bold'>{title}</h3>
						<span>{content}</span>
					</div>
				</div>
				<When predicate={isMonthly}>
					<span className='text-purplish-blue font-bold'>
						+${price}/mo
					</span>
				</When>
				<When predicate={isYearly}>
					<span className='text-purplish-blue font-bold'>
						+${price}/yr
					</span>
				</When>
			</div>
		</div>
	);
};

export default Addons;

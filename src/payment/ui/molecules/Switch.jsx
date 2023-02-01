import classNames from 'classnames';
import { useState } from 'react';
import { ANNUALITY } from '../../constans';
import { usePlanContext } from '../../lib/hooks/usePlanContext';
import { findPrice } from '../../utils/findPrice';

const Switch = () => {
	const { infoPlan, setInfoPlan } = usePlanContext();
	const [isSelected, setIsSelected] = useState();

	const handleOnClick = () => {
		setIsSelected(!isSelected);
		const newAnnuality = getNewAnnuality();
		changeInfoPlan(newAnnuality);
	};

	const changeInfoPlan = newAnnuality => {
		const planAlreadyPicked = infoPlan.title;
		if (planAlreadyPicked) {
			const newPrice = findPrice(infoPlan.title, newAnnuality);
			setInfoPlan(prev => ({ ...prev, price: newPrice }));
		}
		setInfoPlan(prev => ({ ...prev, annuality: newAnnuality }));
	};

	const getNewAnnuality = () => {
		const newAnnuality =
			infoPlan.annuality === ANNUALITY.YEARLY
				? ANNUALITY.MONTHLY
				: ANNUALITY.YEARLY;
		return newAnnuality;
	};

	return (
		<div className='flex w-14 h-6 bg-marine-blue rounded-full  items-center px-1'>
			<div className='w-full h-full relative flex items-center'>
				<span
					className={classNames(
						'w-4 h-4 bg-white rounded-full transition-all duration-500 cursor-pointer absolute',
						{
							'ml-8 ': isSelected
						}
					)}
					onClick={handleOnClick}
				/>
			</div>
		</div>
	);
};

export default Switch;

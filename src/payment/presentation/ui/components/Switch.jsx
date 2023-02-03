import classNames from 'classnames';
import { useState } from 'react';
import { ANNUALITY } from '../../../constans';
import { useStore } from '../../context/Store';
import { findPrice } from '../../lib/utils/findPrice';

const Switch = () => {
	const { plan: planInfo, CHANGE_PRICE, SET_ANNUALITY } = useStore();
	const [isSelected, setIsSelected] = useState();

	const changeInfoPlan = annuality => {
		const planAlreadyPicked = planInfo.title;
		if (planAlreadyPicked) {
			const newPrice = findPrice(planInfo.title, annuality);
			CHANGE_PRICE({ newPrice });
		}
		SET_ANNUALITY({ annuality });
	};

	const getNewAnnuality = () => {
		const newAnnuality =
			planInfo.annuality === ANNUALITY.YEARLY
				? ANNUALITY.MONTHLY
				: ANNUALITY.YEARLY;
		return newAnnuality;
	};

	const handleOnClick = () => {
		setIsSelected(!isSelected);
		const annuality = getNewAnnuality();
		changeInfoPlan(annuality);
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

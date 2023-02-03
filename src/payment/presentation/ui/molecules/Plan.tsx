import React from 'react';
import { useStore } from '../../context/Store';

interface IPlan {
	title: string;
	image: string;
	price: number;
}

interface IPlanProps {
	plan: IPlan;
}

const Plan: React.FC<IPlanProps> = ({ plan }) => {
	const { plan: planInfo, REMOVE_PLAN, SET_PLAN } = useStore();
	const { title, image, price } = plan;

	const handleOnClick = () => {
		if (planInfo.title) {
			REMOVE_PLAN();
		} else {
			SET_PLAN({ payload: { title, price } });
		}
	};

	return (
		<button
			type='button'
			className={` w-40 h-44    border-[1px]   p-4 rounded-md flex flex-col justify-between
			${planInfo.title === title ? 'bg-light-blue border-purplish-blue' : ''}
			`}
			name={title}
			onClick={handleOnClick}
		>
			<img src={image} alt='' />
			<div className='flex flex-col items-start'>
				<p className='font-bold text-marine-blue capitalize'>{title}</p>
				<span> ${price}/mo </span>
			</div>
		</button>
	);
};

export default Plan;

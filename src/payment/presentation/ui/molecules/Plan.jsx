import { useStore } from '../../context/store';

const Plan = ({ plan }) => {
	const { plan: planInfo, removePlan, setPlan } = useStore();
	const { title, image, price } = plan;

	const handleOnClick = () => {
		if (planInfo.title) {
			removePlan();
		} else {
			setPlan(title, price);
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

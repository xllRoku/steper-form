import { usePlanContext } from '../../lib/hooks/usePlanContext';

const Plan = ({ plan, selectedPlan, setSelectedPlan }) => {
	const { setInfoPlan } = usePlanContext();
	const { title, image, price } = plan;

	const handleOnClick = () => {
		setInfoPlan(prev => ({ ...prev, title, price }));
		setSelectedPlan(title);
	};

	return (
		<button
			type='button'
			className={` w-40 h-44 focus:border-purplish-blue   border-[1px]   p-4 rounded-md flex flex-col justify-between
			${selectedPlan === title ? 'bg-light-blue border-purplish-blue' : ''}
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

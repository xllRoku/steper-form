import { PLAN_ACTIONS } from '../../context/plan/PlanProvider';
import { usePlanContext } from '../../lib/hooks/usePlanContext';

const Plan = ({ plan }) => {
	const { state: infoPlan, dispatch } = usePlanContext();
	const { title, image, price } = plan;

	const handleOnClick = () => {
		if (infoPlan.title) {
			dispatch({ type: PLAN_ACTIONS.REMOVE_PLAN });
		} else {
			dispatch({ type: PLAN_ACTIONS.SET_PLAN, title, price });
		}
	};

	return (
		<button
			type='button'
			className={` w-40 h-44    border-[1px]   p-4 rounded-md flex flex-col justify-between
			${infoPlan.title === title ? 'bg-light-blue border-purplish-blue' : ''}
			`}
			name={title}
			onClick={handleOnClick}
		>
			<img src={image} alt='' />
			<div className='flex flex-col items-start'>
				<p className='font-bold text-marine-blue capitalize'>
					{title}
				</p>
				<span> ${price}/mo </span>
			</div>
		</button>
	);
};

export default Plan;

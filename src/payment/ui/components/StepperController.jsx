import useWhichContext from '../../lib/hooks/useWhichContext';
import { useNavigate } from 'react-router-dom';
import { WHICH_ACTIONS } from '../../context/step/WhichStepProvider';

export const ROUTES = {
	YOUR_INFO: '/payment/personal-info',
	SELECT_PLAN: '/payment/select-plan',
	ADD_ONS: '/payment/add-ons',
	SUMMARY: '/payment/summary'
};

const DIRECTION = {
	NEXT: 'next',
	BACK: 'back'
};

const StepperController = () => {
	const navigate = useNavigate();
	const { state: actualStep, dispatch } = useWhichContext();

	const currentRoute = actualStep.whichIs;
	const isCompleted = actualStep.completed;

	const navigateTo = (currentRoute, direction, completed) => {
		const path = currentRoute;
		const routes = Object.values(ROUTES);
		const currentIndex = routes.indexOf(path);

		if (direction === DIRECTION.NEXT && completed) {
			const nextRoute = routes[currentIndex + 1];
			navigate(`${nextRoute}`);
			const completed = false;
			dispatch({ type: WHICH_ACTIONS.SET_COMPLETED, completed });
		} else if (direction === DIRECTION.BACK) {
			const prevRoute = routes[currentIndex - 1];
			if (prevRoute === '/') navigate('/');
			else navigate(`${prevRoute}`);
		}
	};

	const handleClick = (currentRoute, direction, completed) => {
		navigateTo(currentRoute, direction, completed);
	};

	return (
		<div className=' bottom-0 mb-3'>
			<button
				type='button'
				className={`
				w-28 h-10 capitalize  text-marine-blue font-bold rounded-md  absolute  bottom-0    
				${currentRoute === ROUTES.YOUR_INFO ? 'hidden' : ''}
				`}
				onClick={() =>
					handleClick(
						currentRoute,
						DIRECTION.BACK,
						isCompleted
					)
				}
			>
				go back
			</button>
			<button
				type='submit'
				className='w-28 h-10 capitalize bg-marine-blue text-white font-bold rounded-md  absolute bottom-0 right-0 '
				onClick={() =>
					handleClick(
						currentRoute,
						DIRECTION.NEXT,
						isCompleted
					)
				}
			>
				Next Step
			</button>
		</div>
	);
};

export default StepperController;

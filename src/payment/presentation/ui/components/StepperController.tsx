import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constans';
import { useStore } from '../../context/Store';

const DIRECTION = {
	NEXT: 'next',
	BACK: 'back'
};

const StepperController = () => {
	const navigate = useNavigate();
	const { path, SET_STEP_COMPLETED } = useStore();

	const currentRoute = path.whichIs;
	const isCompleted = path.completed;

	const navigateTo = (
		currentRoute: string,
		direction: string,
		completed: boolean
	) => {
		const path = currentRoute;
		const routes = Object.values(ROUTES);
		const currentIndex = routes.indexOf(path);

		if (direction === DIRECTION.NEXT && completed) {
			const nextRoute = routes[currentIndex + 1];
			navigate(`${nextRoute}`);
			const completed = false;
			SET_STEP_COMPLETED({ payload: completed });
		} else if (direction === DIRECTION.BACK) {
			const prevRoute = routes[currentIndex - 1];
			if (prevRoute === '/') navigate('/');
			else navigate(`${prevRoute}`);
		}
	};

	const handleClick = (
		currentRoute: string,
		direction: string,
		completed: boolean
	) => {
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
					handleClick(currentRoute, DIRECTION.BACK, isCompleted)
				}
			>
				go back
			</button>
			<button
				type='submit'
				className='w-28 h-10 capitalize bg-marine-blue text-white font-bold rounded-md  absolute bottom-0 right-0 '
				onClick={() =>
					handleClick(currentRoute, DIRECTION.NEXT, isCompleted)
				}
			>
				Next Step
			</button>
		</div>
	);
};

export default StepperController;

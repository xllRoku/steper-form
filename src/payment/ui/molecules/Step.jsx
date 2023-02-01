import React from 'react';
import useWhichContext from '../../lib/hooks/useWhichContext';

const Step = ({ step }) => {
	const { actualStep } = useWhichContext();
	const { stepNumber, title, url } = step;

	return (
		<div className='flex gap-4 mx-auto w-[200px] items-center'>
			<span
				className={`w-9 h-9 border-[1px] border-white  rounded-full flex items-center justify-center font-bold text-white
			${actualStep.whichIs === url ? 'bg-light-blue text-black' : 'text-white'}
			`}
			>
				{stepNumber}
			</span>
			<div>
				<span className='uppercase  text-light-gray text-sm'>
					step {stepNumber}
				</span>
				<p className='uppercase text-white font-bold'>
					{' '}
					{title}{' '}
				</p>
			</div>
		</div>
	);
};

export default Step;

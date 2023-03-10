import React from 'react';
import Step from './Step';
import sideBar from '../../../../assets/images/bg-sidebar-desktop.svg';
import { STEPS } from '../../../constans';

const SideBar = () => {
	return (
		<div className='relative '>
			<img src={sideBar} alt='' />
			<div className='w-full absolute top-0 space-y-6 mt-8'>
				{STEPS.map(step => (
					<Step step={step} />
				))}
			</div>
		</div>
	);
};

export default SideBar;

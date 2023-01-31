import classNames from 'classnames';
import { useState } from 'react';

//TODO switch
const Switch = () => {
	const [isSelected, setIsSelected] = useState();
	return (
		<div className='flex w-14 h-6 bg-marine-blue rounded-full  items-center px-1'>
			<div className='w-full h-full relative flex items-center'>
				<span
					className={classNames(
						'w-4 h-4 bg-white rounded-full transition-all duration-500 cursor-pointer',
						{
							'ml-8': isSelected
						}
					)}
					onClick={() => setIsSelected(!isSelected)}
				/>
			</div>
		</div>
	);
};

export default Switch;

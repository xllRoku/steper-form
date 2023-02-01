import React from 'react';
import When from '../components/When';

const InputText = ({ label, name, handleOnChange, error }) => {
	const errorMessage = error[name];

	return (
		<label className='flex flex-col'>
			<div className='flex justify-between capitalize text-marine-blue  text-sm'>
				<span className='font-medium'>{label}</span>
				<When predicate={errorMessage}>
					<span className='text-red-500 normal-case font-bold'>
						{errorMessage}
					</span>
				</When>
			</div>
			<input
				type='text'
				className={`p-2 rounded-lg border-[1px] hover:border-purplish-blue focus:border-purplish-blue
				${errorMessage ? 'border-red-500 border-[1px]' : ''}
				`}
				name={name}
				onChange={handleOnChange}
			/>
		</label>
	);
};

export default InputText;

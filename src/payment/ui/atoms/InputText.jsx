import React from 'react';

const InputText = ({ label, name }) => {
	return (
		<label className='flex flex-col'>
			<div className='flex justify-between capitalize text-marine-blue  text-sm'>
				<span className='font-medium'>{label}</span>
			</div>
			<input
				type='text'
				className='p-2 rounded-lg border-[1px] hover:border-purplish-blue focus:border-purplish-blue'
				name={name}
			/>
		</label>
	);
};

export default InputText;

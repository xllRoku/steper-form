const StepperController = () => {
	return (
		<div className='w-full absolute bottom-0 mb-3 flex justify-between'>
			<button
				type='button'
				className={`w-28 h-10 capitalize  text-marine-blue font-bold rounded-md  bottom-0 left-0 `}
			>
				go back
			</button>
			<button
				type='submit'
				className='w-28 h-10 capitalize bg-marine-blue text-white font-bold rounded-md  bottom-0 right-0 '
			>
				Next Step
			</button>
		</div>
	);
};

export default StepperController;

import InputText from '../atoms/InputText';

const PersonalInfo = () => {
	return (
		<>
			<header>
				<h2 className='font-bold text-marine-blue text-4xl'>
					Personal info
				</h2>
				<p className='text-cool-gray'>
					Please provide your name, email address, and phone number.
				</p>
			</header>
			<form className=' mt-10'>
				<div className='space-y-6'>
					<div>
						<InputText label='name' />
					</div>
					<div>
						<InputText label='email address' />
					</div>
					<div>
						<InputText label='phone number' />
					</div>
				</div>
			</form>
		</>
	);
};

export default PersonalInfo;

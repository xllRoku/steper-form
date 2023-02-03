import { useForm } from '../../lib/hooks/useForm';
import InputText from '../atoms/InputText';
import StepperController from '../components/StepperController';
import useSetLocation from '../../lib/hooks/useSetLocation';
import { useEffect } from 'react';
import { FORM_NAMES, initialValues, validationRules } from '../../../constans';
import { useStore } from '../../context/Store';

const PersonalInfoView = () => {
	useSetLocation();
	const { SET_STEP_COMPLETED } = useStore();
	const { handleOnChange, handleOnSubmit, errors, completed } = useForm(
		initialValues,
		validationRules
	);

	useEffect(() => {
		SET_STEP_COMPLETED({ completed });
	}, [completed]);

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
			<form className=' mt-10' onSubmit={handleOnSubmit}>
				<div className='space-y-6'>
					<div>
						<InputText
							label='name'
							name={FORM_NAMES.NAME}
							handleOnChange={handleOnChange}
							error={errors}
						/>
					</div>
					<div>
						<InputText
							label='email address'
							name={FORM_NAMES.EMAIL}
							handleOnChange={handleOnChange}
							error={errors}
						/>
					</div>
					<div>
						<InputText
							label='phone number'
							name={FORM_NAMES.PHONE}
							handleOnChange={handleOnChange}
							error={errors}
						/>
					</div>
				</div>
				<StepperController />
			</form>
		</>
	);
};

export default PersonalInfoView;

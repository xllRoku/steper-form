import { useForm } from '../../lib/hooks/useForm';
import InputText from '../atoms/InputText';
import StepperController from '../molecules/StepperController';

const FORM_NAMES = {
	NAME: 'name',
	EMAIL: 'email',
	PHONE: 'phone'
};

const initialValues = {
	name: '',
	email: '',
	phone: ''
};
const validationRules = {
	name: {
		required: true,
		pattern: /^([A-Z\-\s\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]){2,30}$/i,
		errorMessage: {
			generic: 'This field is required',
			unique: 'El nombre no es válido'
		}
	},
	email: {
		required: true,
		pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		errorMessage: {
			generic: 'This field is required',
			unique: 'El correo electrónico no es válido'
		}
	},
	phone: {
		required: true,
		pattern: /^\d{10,}$/,
		errorMessage: {
			generic: 'This field is required',
			unique: 'El numero de celular debe tener  10 caracteres'
		}
	}
};

const PersonalInfo = () => {
	const { handleOnChange, handleOnSubmit, errors } = useForm(
		initialValues,
		validationRules
	);

	return (
		<>
			<header>
				<h2 className='font-bold text-marine-blue text-4xl'>
					Personal info
				</h2>
				<p className='text-cool-gray'>
					Please provide your name, email address, and phone
					number.
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

export default PersonalInfo;

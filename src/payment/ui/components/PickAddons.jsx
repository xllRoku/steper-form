import { ADDOS } from '../../constans';
import Addons from '../molecules/Addons';

const PickAddons = () => {
	return (
		<>
			<h2 className='font-bold text-marine-blue text-4xl'>
				Pick add-ons
			</h2>
			<p className='text-cool-gray'>
				Add-ons help enhance your gaming experience.
			</p>
			<div>
				<div className='flex flex-col gap-6 mt-6'>
					{ADDOS.map(addon => (
						<Addons addon={addon} />
					))}
				</div>
			</div>
		</>
	);
};

export default PickAddons;

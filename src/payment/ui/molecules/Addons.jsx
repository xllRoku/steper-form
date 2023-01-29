import { getDefaultPrice } from '../../utils/getDefaultPrice';

const Addons = ({ addon }) => {
	const { title, content } = addon;
	const price = getDefaultPrice(addon);
	console.log(price);

	return (
		<div className='w-[480px] flex justify-between items-center border-[1px] border-black p-4 rounded-md '>
			<div className='w-full flex  items-center gap-6 justify-between'>
				<div className='flex items-center gap-4'>
					<input type='checkbox' className='w-4 h-4' name={title} />
					<div className='flex flex-col '>
						<h3 className='text-marine-blue font-bold'>{title}</h3>
						<span>{content}</span>
					</div>
				</div>
				<span className='text-purplish-blue'> +{price}/mo </span>
			</div>
		</div>
	);
};

export default Addons;

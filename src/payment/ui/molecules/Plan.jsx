import { getDefaultPrice } from '../../utils/getDefaultPrice';

const Plan = ({ plan }) => {
	const price = getDefaultPrice(plan);
	const { title, image } = plan;
	return (
		<button
			className='w-40 h-44  focus:border-purplish-blue focus:bg-light-blue hover:border-purplish-blue border-[1px]  border-gray-400 p-4 rounded-md flex flex-col justify-between'
			name='plan'
		>
			<img src={image} alt='' />
			<div className='flex flex-col items-start'>
				<p className='font-bold text-marine-blue capitalize'>{title}</p>
				<span> ${price}/mo </span>
			</div>
		</button>
	);
};

export default Plan;

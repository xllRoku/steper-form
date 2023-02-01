import { useAddonContext } from '../../lib/hooks/useAddonContext';
import { usePlanContext } from '../../lib/hooks/usePlanContext';

const Summary = () => {
	const { infoPlan } = usePlanContext();
	const { addons } = useAddonContext();

	return (
		<>
			<header>
				<h2 className='font-bold text-marine-blue text-4xl'>
					Finishing up
				</h2>
				<p className='text-cool-gray'>
					Double-check everything looks OK before
					confirming.
				</p>
			</header>
			<div className=' mt-10'>
				<div className='space-y-6'>
					<div className='w-[450px] bg-magnolia rounded-md p-4'>
						<div className='flex justify-between items-center  border-b-[1px] border-gray-400 pb-4'>
							<div>
								<div className='text-marine-blue font-bold'>
									<span className='capitalize'>
										{infoPlan.title
											? infoPlan.title
											: 'arcade'}
									</span>
									<span className='capitalize ml-1'>
										{infoPlan.annuality
											? infoPlan.annuality
											: 'Monthly'}
									</span>
								</div>
								<a
									href=''
									className='text-purplish-blue'
								>
									Change
								</a>
							</div>
							<span className='text-purplish-blue font-bold'>
								+$
								{infoPlan.price
									? infoPlan.price
									: 9}
								/mo
							</span>
						</div>
						<div className='pt-4 space-y-3'></div>
					</div>
					<div className='flex justify-between p-4'>
						<p className='text-cool-gray'>
							Total (per month)
						</p>
						<p className='text-purplish-blue font-bold text-xl'>
							+12/mo
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Summary;

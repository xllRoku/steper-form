import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSetLocation from '../../lib/hooks/useSetLocation';
import { useStore } from '../../context/Store';
import StepperController from '../components/StepperController';
import When from '../components/When';
import { ANNUALITY, ROUTES } from '../../../constans';

const SummaryView = () => {
	useSetLocation();
	const { plan: planInfo, addon: addonsInfo } = useStore();
	const isMonthly = planInfo.annuality === ANNUALITY.MONTHLY;
	const isYearly = planInfo.annuality === ANNUALITY.YEARLY;
	const [total, setTotal] = useState(0);

	const add = () => {
		let newTotal = addonsInfo.addons.reduce(
			(acc, addon) => acc + addon.price,
			0
		);
		newTotal += planInfo.price;
		setTotal(newTotal);
	};

	useEffect(() => {
		add();
	}, [addonsInfo, planInfo]);

	return (
		<>
			<header>
				<h2 className='font-bold text-marine-blue text-4xl'>
					Finishing up
				</h2>
				<p className='text-cool-gray'>
					Double-check everything looks OK before confirming.
				</p>
			</header>
			<div className=' mt-10'>
				<div className='space-y-6'>
					<div className='w-[450px] bg-magnolia rounded-md p-4'>
						<div className='flex justify-between items-center  border-b-[1px] border-gray-400 pb-4'>
							<div>
								<div className='text-marine-blue font-bold'>
									<span className='capitalize'>
										{planInfo.title}
									</span>
									<span className='capitalize ml-1'>
										{planInfo.annuality}
									</span>
								</div>
								<Link
									to={ROUTES.SELECT_PLAN}
									className='text-purplish-blue'
								>
									Change
								</Link>
							</div>
							<span className='text-purplish-blue font-bold'>
								+$
								{planInfo.price}
								/mo
							</span>
						</div>
						<div className=' flex flex-col pt-4 space-y-3'>
							{addonsInfo?.addons.map(addon => (
								<>
									<div className='flex justify-between'>
										<h3> {addon.title}</h3>
										<When predicate={isMonthly}>
											<span className='text-purplish-blue font-bold'>
												+${addon.price}/mo
											</span>
										</When>
										<When predicate={isYearly}>
											<span className='text-purplish-blue font-bold'>
												+${addon.price}/yr
											</span>
										</When>
									</div>
								</>
							))}
						</div>
					</div>
					<div className='flex justify-between p-4'>
						<When predicate={isMonthly}>
							<p className='text-cool-gray'>Total (per month)</p>
						</When>
						<When predicate={isYearly}>
							<p className='text-cool-gray'>Total (per year)</p>
						</When>
						<p className='text-purplish-blue font-bold text-xl'>
							<When predicate={isMonthly}>
								<span className='text-purplish-blue font-bold'>
									+${total}/mo
								</span>
							</When>
							<When predicate={isYearly}>
								<span className='text-purplish-blue font-bold'>
									+${total}/yr
								</span>
							</When>
						</p>
					</div>
				</div>
				<StepperController />
			</div>
		</>
	);
};

export default SummaryView;

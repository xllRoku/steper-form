import { IPlanApi } from '../../../domain/services/PlanMemory.service';

interface IPlanDomain {
	title: string;
	price: number;
	image: string;
}

const planApiMapper = (
	plans: Array<IPlanApi>,
	annuality: string
): Array<IPlanDomain> => {
	const pricesAndTitles: Array<IPlanDomain> = [];
	plans.forEach(plan => {
		const price = plan.prices.find(price => price.annuality === annuality);
		if (price) {
			pricesAndTitles.push({
				title: plan.title,
				price: price.price,
				image: plan.image
			});
		}
	});

	return pricesAndTitles;
};

export { planApiMapper };

import { PLANS } from '../../../constans';

export const findPrice = (title, annuality) => {
	const plan = PLANS.find(plan => plan.title === title);
	if (plan) {
		const price = plan.prices.find(price => price.annuality === annuality);
		if (price) {
			return price.price;
		}
	}
	return undefined;
};

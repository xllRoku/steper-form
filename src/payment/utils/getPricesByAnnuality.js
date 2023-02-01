export const getPlansByAnnuality = (plans, annuality) => {
	const pricesAndTitles = [];
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

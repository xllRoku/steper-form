export const getAddonsByAnnuality = (addons, annuality) => {
	console.log(addons);

	const content = [];
	addons.forEach(addon => {
		const price = addon.prices.find(
			addon => addon.annuality === annuality
		);
		if (addon) {
			content.push({
				title: addon.title,
				price: price.price,
				content: addon.content
			});
		}
	});

	return content;
};

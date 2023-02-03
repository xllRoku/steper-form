import { IAddonApi } from '../../../domain/services/AddonMemory.service';

interface IAddonDomain {
	title: string;
	price: number;
	content: string;
}

const addonApiMapper = (
	addons: Array<IAddonApi>,
	annuality: string
): Array<IAddonDomain> => {
	const content: Array<IAddonDomain> = [];
	addons.forEach(addon => {
		const price = addon.prices.find(addon => addon.annuality === annuality);
		if (price) {
			content.push({
				title: addon.title,
				price: price.price,
				content: addon.content
			});
		}
	});

	return content;
};

export { addonApiMapper };

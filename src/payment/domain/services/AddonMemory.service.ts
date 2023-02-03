import { ADDOS } from '../../constans';

export interface IAddonApi {
	title: string;
	content: string;
	prices: {
		price: number;
		annuality: string;
	}[];
}
[];

export interface IAddonService {
	getAddon(): Promise<IAddonApi[]>;
}

function AddonMemoryService(): IAddonService {
	function getAddon() {
		return new Promise<Array<IAddonApi>>((resolve, _) => {
			setTimeout(() => {
				resolve(ADDOS);
			}, 1000);
		});
	}

	return { getAddon };
}

export { AddonMemoryService };

import { PLANS } from '../../constans';

export interface IPlanApi {
	title: string;
	prices: {
		annuality: string;
		price: number;
	}[];
	image: string;
}

export interface IPlanService {
	getPlan(): Promise<Array<IPlanApi>>;
}

function PlanMemoryService(): IPlanService {
	function getPlan() {
		return new Promise<Array<IPlanApi>>((resolve, _) => {
			setTimeout(() => {
				resolve(PLANS);
			}, 1000);
		});
	}

	return { getPlan };
}

export { PlanMemoryService };

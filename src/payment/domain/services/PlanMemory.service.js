import { PLANS } from '../../constans';

function PlanMemoryService() {
	function getPlan() {
		return new Promise((resolve, _) => {
			setTimeout(() => {
				resolve(PLANS);
			}, 1000);
		});
	}

	return { getPlan };
}

export { PlanMemoryService };

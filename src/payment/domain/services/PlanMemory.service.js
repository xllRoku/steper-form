import { PLANS } from '../../constans';

function PlanMemoryService() {
	function getPlan() {
		return Promise.resolve(PLANS);
	}

	return { getPlan };
}

export { PlanMemoryService };

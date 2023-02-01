import { ADDOS } from '../../constans';

function AddonMemoryService() {
	function getAddon() {
		return new Promise((resolve, _) => {
			setTimeout(() => {
				resolve(ADDOS);
			}, 1000);
		});
	}

	return { getAddon };
}

export { AddonMemoryService };

import { useEffect, useState } from 'react';

const useFetch = <T>(fetchData: () => Promise<Array<T>>) => {
	const [state, setState] = useState<{ data: Array<T>; loading: boolean }>({
		data: [],
		loading: true
	});

	useEffect(() => {
		(async () => {
			const data = await fetchData();
			setState(prev => ({
				...prev,
				data,
				loading: false
			}));
		})();
	}, []);

	const { data, loading } = state;

	return { data, loading };
};

export { useFetch };

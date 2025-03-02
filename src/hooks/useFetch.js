import { useState } from "react";

const useFetch = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async ({ url, params = {}, adapter }) => {
		const queryString = params ? `?${new URLSearchParams(params).toString()}` : "";
		setLoading(true);
		try {
			const response = await fetch(`${url}${queryString}`);
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			const result = await response.json();
			if (adapter) {
				setData(adapter(result));
			} else {
				setData(result);
			}
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};
	return { data, loading, error, fetchData };
};

export default useFetch;

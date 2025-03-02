export const character = (data) => {
	const items = Array.isArray(data) ? data : data.items || [];
	return items.map((item) => ({
		id: item.id,
		name: item.name,
		description: item.description,
		gender: item.gender,
		race: item.race,
		affiliation: item.affiliation,
		ki: item.ki,
		maxKi: item.maxKi,
		imageUrl: item.image,
	}));
};

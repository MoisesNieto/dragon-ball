export const character = (data) => {
	return {
		id: data.id,
		name: data.name,
		description: data.description,
		affiliation: data.affiliation,
		gender: data.gender,
		race: data.race,
		imageURL: data.image,
		ki: data.ki,
		maxKi: data.maxKi,
		originPlanet: {
			name: data.originPlanet.name,
			description: data.originPlanet.description,
			image: data.originPlanet.image,
		},
		transformations: data.transformations.map((transform) => ({
			id: transform.id,
			name: transform.name,
			image: transform.image,
			ki: transform.ki,
		})),
	};
};

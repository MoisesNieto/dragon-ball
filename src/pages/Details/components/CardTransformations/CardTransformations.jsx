import "./index.css";

const CardTransformations = ({ transformations }) => {
	const units = {
		Billion: 1e9,
		Trillion: 1e12,
		Quadrillion: 1e15,
		Quintillion: 1e18,
		Sextillion: 1e21,
		Septillion: 1e24,
		Million: 1e6,
		Thousand: 1e3,
	};

	const kiToNumber = (ki) => {
		const parts = ki.split(" ");
		if (parts.length === 1) {
			return parseFloat(parts[0]);
		}
		const value = parseFloat(parts[0]);
		const unit = parts[1];
		return value * (units[unit] || 1);
	};
	transformations.sort((a, b) => kiToNumber(b.ki) - kiToNumber(a.ki));

	return (
		<>
			<h1>Transformations</h1>
			<div className="card-transformations__container">
				{transformations.map((item) => (
					<div key={item.id} className="card-transformations">
						<img className="card-transformations__image" src={item.image} alt={item.name} />
						<div className="card-transformations__content">
							<h2 className="card-transformations__title">{item.name}</h2>
							<p className="card-transformations__ki">{item.ki}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default CardTransformations;

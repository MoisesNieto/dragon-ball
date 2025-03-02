import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Card = ({ item }) => {
	const { isFavorite, setIsFavorite } = useAppContext();
	const navigate = useNavigate();

	const isItemFavorite = isFavorite.includes(item.id);

	const handleFavorite = () => {
		if (isItemFavorite) {
			return setIsFavorite(isFavorite.filter((itemId) => itemId !== item.id));
		}
		setIsFavorite([...isFavorite, item.id]);
	};
	const handleDetails = () => {
		navigate(`/details/${item.id}`);
	};

	return (
		<div className="card">
			<img src={item.imageUrl} alt={item.name} className="card__image" onClick={handleDetails} />
			<div className="card__line"></div>
			<div className="card__content">
				<div>
					<span className="card__name">{item.name}</span>
				</div>
				<div className="card__favorite">
					<img
						src={isItemFavorite ? "../../public/heart.svg" : "../../public/heartvoid.svg"}
						alt="heart"
						onClick={handleFavorite}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;

import { useAppContext } from "../../../../context/AppContext";
import "./index.css";

const CardCharacter = ({ item }) => {
	const { isFavorite, setIsFavorite } = useAppContext();
	const isItemFavorite = isFavorite.includes(item.id);
	const handleFavorite = () => {
		if (isItemFavorite) {
			return setIsFavorite(isFavorite.filter((itemId) => itemId !== item.id));
		}
		setIsFavorite([...isFavorite, item.id]);
	};

	return (
		<div className="character-card">
			<img className="character-card__image" src={item.imageURL} alt="Character" />
			<div className="character-card__content">
				<div className="character-card__title">
					<div>
						<h2>{item.name}</h2>
					</div>
					<div className="character-card__icon">
						<img
							src={isItemFavorite ? "../../public/heart.svg" : "../../public/heartvoid.svg"}
							alt="heart"
							onClick={handleFavorite}
						/>
					</div>
				</div>
				<div>
					<p className="character-card__description">{item.description}</p>
				</div>
			</div>
		</div>
	);
};

export default CardCharacter;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
	const { isFavorite, showFavorite, setShowFavorite } = useAppContext();
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/home");
	}, []);
	const handleRedirect = () => {
		navigate("/home");
	};
	const handleShowFavorite = () => {
		setShowFavorite(!showFavorite);
	};

	return (
		<header>
			<div className="header">
				<div className="header__logo">
					<img src="../../public/logo.svg" alt="Logo" className="header__logo-image" onClick={handleRedirect} />
				</div>
				<div className="header__heart">
					<img
						src={isFavorite.length > 0 ? "../../public/heart.svg" : "../../public/heartvoid.svg"}
						alt="heart"
						onClick={handleShowFavorite}
					/>
					<span className="header__favorite"> {isFavorite.length}</span>
				</div>
			</div>
		</header>
	);
};

export default Header;

import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import useFetch from "../../hooks/useFetch";
import "./index.css";
import { character } from "../../adapters/characters";
import { useAppContext } from "../../context/AppContext";

const Home = () => {
	const { isFavorite, showFavorite } = useAppContext();
	const { data, loading, error, fetchData } = useFetch();
	const url = "https://dragonball-api.com/api/characters";
	const [debounceTimeout, setDebounceTimeout] = useState(null);
	const [value, setValue] = useState("");
	useEffect(() => {
		fetchData({ url, params: { limit: 50 }, adapter: character });
	}, []);

	const handleInput = (e) => {
		const inputValue = e.target.value;
		setValue(inputValue);

		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}

		const newTimeout = setTimeout(() => {
			if (inputValue) {
				fetchData({ url, params: { name: inputValue }, adapter: character });
			} else {
				fetchData({ url, params: { limit: 50 }, adapter: character });
			}
		}, 300);

		setDebounceTimeout(newTimeout);
	};
	const filteredData = showFavorite ? data.filter((item) => isFavorite.includes(item.id)) : data;
	return (
		<>
			{loading && <div className="header__progress-bar"></div>}
			{error && <div className="alert">Error: Ha ocurrido un problema, vuelva a recargar la página.</div>}
			<main>
				<Search result={data} methodParent={handleInput} value={value} />
				<div className="card-container">
					{filteredData ? filteredData.map((item, i) => <Card key={i + item.id} item={item} />) : <h3>No hay datos</h3>}
				</div>
			</main>
		</>
	);
};

export default Home;

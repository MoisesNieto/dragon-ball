import { useParams } from "react-router-dom";
import { character } from "../../adapters/character";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import CardCharacter from "./components/CardCharacter/CardCharacter";
import CardTransformations from "./components/CardTransformations/CardTransformations";

const Details = () => {
	const { id } = useParams();
	const { data, loading, error, fetchData } = useFetch();
	const url = `https://dragonball-api.com/api/characters/${id}`;

	useEffect(() => {
		fetchData({ url, adapter: character });
	}, [id]);

	return (
		<>
			{loading && <div className="header__progress-bar" data-testid="loading-indicator"></div>}
			{error && <div className="alert">Error: Ha ocurrido un problema, vuelva a recargar la página.</div>}
			{data ? (
				<>
					<CardCharacter item={data} />
					<main>
						<CardTransformations transformations={data.transformations} />
					</main>
				</>
			) : (
				<h3>No hay datos</h3>
			)}
		</>
	);
};

export default Details;

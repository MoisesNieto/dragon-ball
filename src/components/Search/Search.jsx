import "./index.css";
const Search = ({ result, methodParent, value }) => {
	return (
		<div className="container-search">
			<div className="search">
				<img src="../../public/lupa.svg" alt="" />
				<input
					type="text"
					className="search__input"
					placeholder="SEARCH A CHARACTER..."
					onChange={methodParent}
					value={value}
				/>
				<i className="fas fa-search search__icon"></i>
			</div>
			<div className="result">
				{result?.length} <span>RESULTS</span>
			</div>
		</div>
	);
};

export default Search;

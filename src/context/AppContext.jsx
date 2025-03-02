import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [isFavorite, setIsFavorite] = useState([]);
	const [showFavorite, setShowFavorite] = useState(false);
	const contextValue = {
		isFavorite,
		setIsFavorite,
		showFavorite,
		setShowFavorite,
	};
	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("useAppContext debe ser usado dentro de un appContextProvider");
	}
	return context;
};

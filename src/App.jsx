import { Suspense, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
	const Home = lazy(() => import("./pages/Home/Home"));
	const Header = lazy(() => import("./components/Header/Header"));
	const Details = lazy(() => import("./pages/Details/Details"));

	return (
		<>
			<AppContextProvider>
				<Router>
					<Suspense fallback={<div>Cargando...</div>}>
						<Header />
						<Routes>
							<Route path="/home" element={<Home />} />
							<Route path="/details/:id" element={<Details />} />
						</Routes>
					</Suspense>
				</Router>
			</AppContextProvider>
		</>
	);
};

export default App;

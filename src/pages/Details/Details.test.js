import { render, screen, waitFor } from "@testing-library/react";
import Details from "./Details";
import { AppContextProvider } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useParams: jest.fn(),
}));

jest.mock("../../hooks/useFetch", () => jest.fn());

describe("Details Component", () => {
	const mockId = "1";

	beforeEach(() => {
		useParams.mockReturnValue({ id: mockId });
	});

	test("should show loading indicator while fetching data", () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
			fetchData: jest.fn(),
		});

		render(<Details />);

		// Verificar que el indicador de carga está presente
		const loadingIndicator = screen.getByTestId("loading-indicator");
		expect(loadingIndicator).toBeInTheDocument();
	});

	test("should show error message if there is an error while fetching data", async () => {
		useFetch.mockReturnValue({
			data: null,
			loading: false,
			error: true,
			fetchData: jest.fn(),
		});

		render(<Details />);

		await waitFor(() => {
			const errorMessage = screen.getByText("Error: Ha ocurrido un problema, vuelva a recargar la página.");
			expect(errorMessage).toBeInTheDocument();
		});
	});

	test("should render character data and transformations when fetched successfully", async () => {
		const mockData = {
			name: "Goku",
			transformations: [
				{
					id: 1,
					name: "Goku SSJ",
					image: "https://dragonball-api.com/transformaciones/goku_ssj.webp",
					ki: "3 Billion",
				},
			],
		};

		useFetch.mockReturnValue({
			data: mockData,
			loading: false,
			error: null,
			fetchData: jest.fn(),
		});

		render(
			<AppContextProvider>
				<Details />
			</AppContextProvider>,
		);

		await waitFor(() => {
			const characterName = screen.getByText("Goku");
			expect(characterName).toBeInTheDocument();
		});

		const transformations = screen.getByText("Goku SSJ");
		expect(transformations).toBeInTheDocument();
	});

	test('should show "No hay datos" message', async () => {
		useFetch.mockReturnValue({
			data: null,
			loading: false,
			error: null,
			fetchData: jest.fn(),
		});

		render(<Details />);

		await waitFor(() => {
			const noDataMessage = screen.getByText("No hay datos");
			expect(noDataMessage).toBeInTheDocument();
		});
	});
});

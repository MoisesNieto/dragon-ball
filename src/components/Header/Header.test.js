import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

jest.mock("../../context/AppContext", () => ({
	useAppContext: jest.fn(),
}));

describe("Header Component", () => {
	let mockSetShowFavorite;

	beforeEach(() => {
		mockSetShowFavorite = jest.fn();
		useAppContext.mockReturnValue({
			isFavorite: [],
			showFavorite: false,
			setShowFavorite: mockSetShowFavorite,
		});
		useNavigate.mockClear();
	});

	test("should redirect to /home when logo is clicked", () => {
		const mockNavigate = jest.fn();
		useNavigate.mockReturnValue(mockNavigate);

		render(<Header />);

		const logo = screen.getByAltText("Logo");
		fireEvent.click(logo);

		expect(mockNavigate).toHaveBeenCalledWith("/home");
	});

	test("should toggle showFavorite when heart icon is clicked", () => {
		render(<Header />);

		const heartIcon = screen.getByAltText("heart");
		fireEvent.click(heartIcon);

		expect(mockSetShowFavorite).toHaveBeenCalledWith(true);
	});

	test("should display the correct number of favorites", () => {
		useAppContext.mockReturnValue({
			isFavorite: [1, 2, 3],
			showFavorite: false,
			setShowFavorite: mockSetShowFavorite,
		});

		render(<Header />);

		const favoriteCount = screen.getByText("3");
		expect(favoriteCount).toBeInTheDocument();
	});

	test("should display heart with correct src based on favorites", () => {
		useAppContext.mockReturnValue({
			isFavorite: [1, 2, 3],
			showFavorite: false,
			setShowFavorite: mockSetShowFavorite,
		});

		render(<Header />);

		const heartIcon = screen.getByAltText("heart");
		expect(heartIcon.src).toContain("/heart.svg");
	});

	test("should display heart with empty state when no favorites", () => {
		render(<Header />);

		const heartIcon = screen.getByAltText("heart");
		expect(heartIcon.src).toContain("/heartvoid.svg");
	});
});

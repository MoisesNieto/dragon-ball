import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";
import { useAppContext } from "../../context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

jest.mock("../../context/AppContext", () => ({
	useAppContext: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

describe("Card Component", () => {
	let mockSetIsFavorite;

	beforeEach(() => {
		mockSetIsFavorite = jest.fn();
		useAppContext.mockReturnValue({
			isFavorite: [],
			setIsFavorite: mockSetIsFavorite,
		});
		useNavigate.mockReturnValue(jest.fn());
	});

	test("should display the card with item data", () => {
		const item = { id: 1, name: "Item 1", imageUrl: "image-url" };

		render(
			<Router>
				<Card item={item} />
			</Router>,
		);

		expect(screen.getByText("Item 1")).toBeInTheDocument();
		expect(screen.getByAltText("Item 1")).toBeInTheDocument();
	});

	test("should navigate to details page when image is clicked", () => {
		const item = { id: 1, name: "Item 1", imageUrl: "image-url" };

		const mockNavigate = jest.fn();
		useNavigate.mockReturnValue(mockNavigate);

		render(
			<Router>
				<Card item={item} />
			</Router>,
		);

		fireEvent.click(screen.getByAltText("Item 1"));
		expect(mockNavigate).toHaveBeenCalledWith(`/details/${item.id}`);
	});
});

import { render, screen, fireEvent } from "@testing-library/react";
import CardCharacter from "./CardCharacter";
import { AppContextProvider } from "../../../../context/AppContext";
import React from "react";

const mockItem = {
	id: "1",
	name: "Goku",
	description: "Strong warrior from Earth.",
	imageURL: "goku.jpg",
};

const renderWithContext = (component) => {
	return render(<AppContextProvider>{component}</AppContextProvider>);
};

describe("CardCharacter Component", () => {
	test("should display heart icon based on favorite status", () => {
		renderWithContext(<CardCharacter item={mockItem} />);

		const heartIcon = screen.getByAltText("heart");
		expect(heartIcon).toHaveAttribute("src", "../../public/heartvoid.svg");
	});

	test("should add to favorites when heart is clicked and not in favorites", () => {
		renderWithContext(<CardCharacter item={mockItem} />);

		const heartIcon = screen.getByAltText("heart");
		fireEvent.click(heartIcon);

		expect(heartIcon).toHaveAttribute("src", "../../public/heart.svg");
	});

	test("should remove from favorites when heart is clicked and already in favorites", () => {
		const mockFavoriteContext = {
			isFavorite: [mockItem.id],
			setIsFavorite: jest.fn(),
		};

		render(
			<AppContextProvider value={mockFavoriteContext}>
				<CardCharacter item={mockItem} />
			</AppContextProvider>,
		);

		const heartIcon = screen.getByAltText("heart");
		fireEvent.click(heartIcon);

		expect(heartIcon).toHaveAttribute("src", "../../public/heart.svg");
	});

	test("should display character name and description", () => {
		renderWithContext(<CardCharacter item={mockItem} />);

		const characterName = screen.getByText("Goku");
		expect(characterName).toBeInTheDocument();

		const characterDescription = screen.getByText("Strong warrior from Earth.");
		expect(characterDescription).toBeInTheDocument();
	});
});

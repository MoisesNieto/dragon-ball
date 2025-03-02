import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search"; // Ajusta la ruta si es necesario

describe("Search Component", () => {
	let mockMethodParent;

	beforeEach(() => {
		mockMethodParent = jest.fn();
	});

	test("should render search icon and input field", () => {
		render(<Search result={[]} methodParent={mockMethodParent} value="" />);

		const searchIcon = screen.getByAltText("");
		expect(searchIcon).toBeInTheDocument();

		const input = screen.getByPlaceholderText("SEARCH A CHARACTER...");
		expect(input).toBeInTheDocument();
	});

	test("should call methodParent when input value changes", () => {
		render(<Search result={[]} methodParent={mockMethodParent} value="batman" />);

		const input = screen.getByPlaceholderText("SEARCH A CHARACTER...");
		fireEvent.change(input, { target: { value: "superman" } });

		expect(mockMethodParent).toHaveBeenCalled();
		expect(mockMethodParent).toHaveBeenCalledWith(expect.any(Object));
	});

	test("should display the correct number of results", () => {
		render(<Search result={[1, 2, 3]} methodParent={mockMethodParent} value="" />);
		const resultText = screen.getByText("3");
		expect(resultText).toHaveTextContent("3");
	});

	test('should display "0 RESULTS" if no results are provided', () => {
		render(<Search result={[]} methodParent={mockMethodParent} value="" />);
		const resultText = screen.getByText("RESULTS");
		expect(resultText).toHaveTextContent("RESULTS");
	});
});

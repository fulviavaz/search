// ResultsList.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ResultsList, { Result } from "../../ResultsList";

const mockResults: Result[] = [
  {
    id: 1,
    url: "https://example.com/1",
    title: "Example Title 1",
    description: "Description 1",
    image: "image-1.jpg",
  },
  {
    id: 2,
    url: "https://example.com/2",
    title: "Example Title 2",
    description: "Description 2",
    image: "image-2.jpg",
  },
];

describe("ResultsList", () => {
  it("should render correctly with results", () => {
    render(<ResultsList results={mockResults} searchTerm="test" />);

    // Check if results are rendered
    const urlElements = screen.getAllByRole("link", { name: /example\.com/i });
    expect(urlElements).toHaveLength(mockResults.length);

    const titleElements = screen.getAllByText(/example title/i);
    expect(titleElements).toHaveLength(mockResults.length);

    const descriptionElements = screen.getAllByText(/description/i);
    expect(descriptionElements).toHaveLength(mockResults.length);
  });

  it("should handle item click and show modal", () => {
    render(<ResultsList results={mockResults} searchTerm="test" />);

    // Click on the first result
    const firstResultContainer = screen.getAllByRole("presentation")[0];
    fireEvent.click(firstResultContainer);

    // Check if the modal is rendered after clicking an item
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();

    // Check if the modal content is correct
    const modalTitle = screen.getByText(/Example Title 1/i);
    const modalDescription = screen.getByText(/Description 1/i);
    expect(modalTitle).toBeInTheDocument();
    expect(modalDescription).toBeInTheDocument();
  });

  it('should display "No results found." when there are no results', () => {
    render(<ResultsList results={[]} searchTerm="test" />);

    const noResultsMessage = screen.getByText(/No results found\./i);
    expect(noResultsMessage).toBeInTheDocument();
  });

  it('should display "Please enter a search term." when no search term is provided', () => {
    render(<ResultsList results={mockResults} searchTerm="" />);

    const noSearchTermMessage = screen.getByText(
      /Please enter a search term\./i
    );
    expect(noSearchTermMessage).toBeInTheDocument();
  });
});

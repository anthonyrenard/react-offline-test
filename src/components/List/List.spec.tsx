/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { List } from "./List";

// Mock the RequestContext data
jest.mock("../../providers", () => ({
  RequestContext: {
    Consumer: ({ children }) =>
      children({
        data: {
          from: "2023-08-01T00:00Z",
          to: "2023-08-02T00:00Z",
          generationmix: [
            { fuel: "Gas", perc: 40 },
            { fuel: "Coal", perc: 30 },
            { fuel: "Nuclear", perc: 20 },
            { fuel: "Solar", perc: 10 },
          ],
        },
      }),
  },
}));

// Mock the useContext hook to return the mocked data
const mockUseContext = jest.fn();
jest.spyOn(React, "useContext").mockImplementation(mockUseContext);

describe("List Component", () => {
  it("should render the date and list items", () => {
    mockUseContext.mockReturnValue({
      data: {
        from: "2023-08-01T00:00Z",
        to: "2023-08-02T00:00Z",
        generationmix: [
          { fuel: "Gas", perc: 40 },
          { fuel: "Coal", perc: 30 },
          { fuel: "Nuclear", perc: 20 },
          { fuel: "Solar", perc: 10 },
        ],
      },
    });

    const { getByText } = render(<List />);

    // Check if the date is rendered
    const dateElement = getByText("1 day ago");
    expect(dateElement).toBeInTheDocument();

    // Check if the list items are rendered
    const gasItem = getByText("Gas");
    const coalItem = getByText("Coal");
    const nuclearItem = getByText("Nuclear");
    const solarItem = getByText("Solar");

    expect(gasItem).toBeInTheDocument();
    expect(coalItem).toBeInTheDocument();
    expect(nuclearItem).toBeInTheDocument();
    expect(solarItem).toBeInTheDocument();
  });
});

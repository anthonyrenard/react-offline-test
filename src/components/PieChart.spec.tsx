/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PieChart } from "./PieChart";

jest.mock("d3-color", () => ({}));

// Mock the RequestContext data
jest.mock("../providers", () => ({
  RequestContext: {
    Consumer: ({ children }) =>
      children({
        data: {
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

describe("PieChart Component", () => {
  it("should render without errors", () => {
    // Mock the data to be returned by useContext
    mockUseContext.mockReturnValue({
      data: {
        generationmix: [
          { fuel: "Gas", perc: 40 },
          { fuel: "Coal", perc: 30 },
          { fuel: "Nuclear", perc: 20 },
          { fuel: "Solar", perc: 10 },
        ],
      },
    });

    render(<PieChart />);
  });
});

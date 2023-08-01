/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Loading } from "./Loading";

describe("Loading Component", () => {
  it("should render loading text correctly", () => {
    const { getByTestId } = render(<Loading />);
    const loadingComponent = getByTestId("loading-component");

    expect(loadingComponent).toBeInTheDocument();
    expect(loadingComponent).toHaveTextContent("Loading...");
  });
});

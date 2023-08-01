/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Error } from "./Error";

describe("Error Component", () => {
  it("should render error message correctly", () => {
    const { getByTestId } = render(<Error />);
    const errorComponent = getByTestId("error-component");

    // Make sure the error message is displayed correctly
    expect(errorComponent).toBeInTheDocument();
    expect(errorComponent).toHaveTextContent("Something went wrong!");
  });
});

/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Header } from "./Header";

describe("Header Component", () => {
  it("should render logo image correctly", () => {
    const { getByAltText } = render(<Header />);
    const logoImage = getByAltText("Kiwipower");

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute(
      "src",
      "https://www.kiwipowered.com/wp-content/themes/kiwi-power/assets/images/logos/kiwi-on-dark.svg"
    );
  });

  it("should contain a navigation bar", () => {
    const { getByRole } = render(<Header />);
    const navigationBar = getByRole("navigation");

    expect(navigationBar).toBeInTheDocument();
    expect(navigationBar).toHaveClass("mx-auto");
    expect(navigationBar).toHaveClass("flex");
    expect(navigationBar).toHaveClass("max-w-7xl");
    expect(navigationBar).toHaveClass("items-center");
    expect(navigationBar).toHaveClass("justify-between");
    expect(navigationBar).toHaveClass("p-6");
    expect(navigationBar).toHaveClass("lg:px-8");
  });
});

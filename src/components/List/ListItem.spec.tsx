/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ListItem } from "./ListItem";

describe("ListItem Component", () => {
  const fuelData = [
    {
      fuel: "biomass",
      perc: 20,
      iconClass: "fa-recycle",
      colorClass: "bg-green-200",
      textColorClass: "text-green-500",
    },
    {
      fuel: "coal",
      perc: 30,
      iconClass: "fa-hill-rockslide",
      colorClass: "bg-gray-200",
      textColorClass: "text-gray-500",
    },
    {
      fuel: "imports",
      perc: 10,
      iconClass: "fa-ferry",
      colorClass: "bg-lime-200",
      textColorClass: "text-lime-500",
    },
    {
      fuel: "gas",
      perc: 40,
      iconClass: "fa-volcano",
      colorClass: "bg-orange-200",
      textColorClass: "text-orange-500",
    },
    {
      fuel: "nuclear",
      perc: 15,
      iconClass: "fa-circle-radiation",
      colorClass: "bg-red-200",
      textColorClass: "text-red-500",
    },
    {
      fuel: "other",
      perc: 25,
      iconClass: "fa-meteor",
      colorClass: "bg-stone-200",
      textColorClass: "text-stone-500",
    },
    {
      fuel: "hydro",
      perc: 5,
      iconClass: "fa-water",
      colorClass: "bg-cyan-200",
      textColorClass: "text-cyan-500",
    },
    {
      fuel: "solar",
      perc: 8,
      iconClass: "fa-sun",
      colorClass: "bg-yellow-200",
      textColorClass: "text-yellow-500",
    },
    {
      fuel: "wind",
      perc: 12,
      iconClass: "fa-wind",
      colorClass: "bg-teal-200",
      textColorClass: "text-teal-500",
    },
  ] as any; // Only for the purpose of this test

  fuelData.forEach(({ fuel, perc, iconClass, colorClass, textColorClass }) => {
    it(`should render correctly for ${fuel}`, () => {
      const generation = { fuel, perc };
      const { getByText, getByTestId } = render(<ListItem {...generation} />);

      // Check if the fuel name is rendered correctly
      const fuelElement = getByText(fuel);
      expect(fuelElement).toBeInTheDocument();

      // Check if the percentage is rendered correctly
      const percElement = getByText(`${perc} %`);
      expect(percElement).toBeInTheDocument();

      // Check if the correct icon is applied
      const iconElement = getByTestId("icon");
      expect(iconElement).toHaveClass(iconClass);

      // Check if the correct background color is applied
      const backgroundElement = getByTestId("background");
      expect(backgroundElement).toHaveClass(colorClass);

      // Check if the correct icon color is applied
      expect(iconElement).toHaveClass(textColorClass);
    });
  });
});

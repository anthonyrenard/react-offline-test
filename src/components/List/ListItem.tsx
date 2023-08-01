import React, { useEffect } from "react";
import { GenerationMix } from "../../types";
import { classNames } from "../../utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleRadiation,
  faFerry,
  faHillRockslide,
  faMeteor,
  faQuestion,
  faRecycle,
  faSun,
  faVolcano,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

type ItemColor = {
  background: string;
  icon: string;
};

export const ListItem: React.FC<GenerationMix> = (generation) => {
  const [icon, setIcon] = React.useState(faQuestion);
  const [color, setColor] = React.useState<ItemColor>({
    background: "bg-gray-200",
    icon: "text-gray-500",
  });

  useEffect(() => {
    switch (generation.fuel) {
      case "biomass":
        setIcon(faRecycle);
        setColor({ background: "bg-green-200", icon: "text-green-500" });
        break;
      case "coal":
        setIcon(faHillRockslide);
        setColor({ background: "bg-gray-200", icon: "text-gray-500" });
        break;
      case "imports":
        setIcon(faFerry);
        setColor({ background: "bg-lime-200", icon: "text-lime-500" });
        break;
      case "gas":
        setIcon(faVolcano);
        setColor({ background: "bg-orange-200", icon: "text-orange-500" });
        break;
      case "nuclear":
        setIcon(faCircleRadiation);
        setColor({ background: "bg-red-200", icon: "text-red-500" });
        break;
      case "other":
        setIcon(faMeteor);
        setColor({ background: "bg-stone-200", icon: "text-stone-500" });
        break;
      case "hydro":
        setIcon(faWater);
        setColor({ background: "bg-cyan-200", icon: "text-cyan-500" });
        break;
      case "solar":
        setIcon(faSun);
        setColor({ background: "bg-yellow-200", icon: "text-yellow-500" });
        break;
      case "wind":
        setIcon(faWind);
        setColor({ background: "bg-teal-200", icon: "text-teal-500" });
        break;
      default:
        setIcon(faQuestion);
        setColor({ background: "bg-gray-200", icon: "text-gray-500" });
        break;
    }
  }, []);

  return (
    <div
      role="listitem"
      key={generation.fuel}
      className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6"
    >
      <dt>
        <div
          data-testid="background"
          className={classNames(color.background, "absolute rounded-md p-3")}
        >
          <FontAwesomeIcon
            icon={icon}
            className={classNames(color.icon, "h-6 w-6")}
            aria-hidden="true"
            data-testid="icon"
          />
        </div>
        <p className="ml-16 truncate text-sm font-medium text-gray-500">
          {generation.fuel}
        </p>
      </dt>
      <dd className="ml-16 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">
          {generation.perc} %
        </p>
      </dd>
    </div>
  );
};

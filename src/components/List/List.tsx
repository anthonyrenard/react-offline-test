import React, { useContext } from "react";
import { RequestContext } from "../../providers";
import { ListItem } from "./ListItem";
import { formatDistance } from "date-fns";

export const List = () => {
  const { data } = useContext(RequestContext);

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {formatDistance(new Date(data.from), new Date(data.to), {
          addSuffix: true,
        })}
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data?.generationmix.map((item) => (
          <ListItem key={item.fuel} {...item} />
        ))}
      </dl>
    </div>
  );
};

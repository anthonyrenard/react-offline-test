import React, { useEffect } from "react";

import { IData, State } from "../types";
import { request } from "../utils";
import { Error, Loading } from "../components";

const url = "https://api.carbonintensity.org.uk";

export const RequestContext = React.createContext<IData | null>(null);

export const RequestProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = React.useState<State>("loading");
  const [data, setData] = React.useState<IData | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await request<IData>(`${url}/generation`);
        setData(data);
        setState("success");
      } catch (error) {
        console.error(error);
        setState("error");
      }
    })();
  }, []);

  switch (state) {
    case "error":
      return <Error />;
    case "loading":
      return <Loading />;
    default:
      return (
        <RequestContext.Provider value={data}>
          {children}
        </RequestContext.Provider>
      );
  }
};

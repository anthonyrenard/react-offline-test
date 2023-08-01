import React from "react";

import { Header } from "./components/Header";
import { RequestProvider } from "./providers";
import { List, PieChart } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <RequestProvider>
          <List />
          <PieChart />
        </RequestProvider>
      </main>
    </>
  );
};

export { App };

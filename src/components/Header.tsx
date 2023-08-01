import React from "react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Kiwipower</span>
            <img
              className="h-8 w-auto"
              src="https://www.kiwipowered.com/wp-content/themes/kiwi-power/assets/images/logos/kiwi-on-dark.svg"
              alt="Kiwipower"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

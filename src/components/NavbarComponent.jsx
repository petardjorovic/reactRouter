import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoLogoElectron } from "react-icons/io5";
import ToggleModeComponent from "./ToggleModeComponent";

function NavbarComponent({ darkMode, setDarkMode }) {
  let routes = [
    {
      label: "Home",
      path: "/",
      icon: "",
    },
    {
      label: "Products",
      path: "/products",
      icon: "",
    },
    {
      label: "About",
      path: "/about",
      icon: "",
    },
    {
      label: "Contact",
      path: "/contact",
      icon: "",
    },
  ];

  return (
    <header className="container bg-cyan-200 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-200">
      <nav className="w-[95%] mx-auto flex items-center justify-between h-[120px]">
        <h1 className="block flex items-center text-2xl gap-3">
          <Link to="/">
            <IoLogoElectron size={50} />
          </Link>{" "}
          Electron Shop
        </h1>
        <ToggleModeComponent darkMode={darkMode} setDarkMode={setDarkMode} />
        <ul className="flex gap-[20px]">
          {routes.map((el, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={el.path}
                  className="transition-all duration-300 pb-[45px] border-b-transparent select-none"
                >
                  {el.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;

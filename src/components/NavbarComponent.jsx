import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
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
  let pathname = window.location.pathname;

  return (
    <div className="container w-[95%] mx-auto flex items-center justify-between h-[120px]">
      <h1>Without Router</h1>
      <ul className="flex gap-[20px]">
        {routes.map((el, i) => {
          return (
            <li key={i}>
              <Link to={el.path}>{el.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavbarComponent;

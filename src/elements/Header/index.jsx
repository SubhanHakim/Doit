import React from "react";
import { NavLink } from "react-router-dom";
import { Navdata } from "../../json/header";
import Button from "../Buttons";

export default function Header() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#404040" : "grey",
    };
  };

  return (
    <nav className="border-b-2">
      <div className="container px-20 py-6 mx-auto flex justify-between items-center">
        <div className="brand">
          <a href="/" className="font-semibold text-2xl text-primary">
            Doit.
          </a>
        </div>
        <div className="nav-list">
          <ul className="flex gap-[30px]">
            {Navdata.map((item, index) => {
              return (
                <li className="text-grey text-base font-normal" key={index}>
                  <NavLink to={item.path} style={navLinkStyle}>
                    <span className="fromLeft">{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-[30px] align-middle">
          <Button color="isDisabled">
            <NavLink to="/signin">Sign In</NavLink>
          </Button>
          <Button color="isLight">
            <NavLink to="/trial">Start For Free</NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
}

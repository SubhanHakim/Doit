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
    <nav className="container px-20 py-6 mx-auto">
      <div className="flex justify-between items-center">
        <a href="/" className="font-semibold text-2xl text-primary">
          Doit.
        </a>
        <ul className="flex gap-[30px]">
          {Navdata.map((item, index) => {
            return (
              <li className="text-grey text-base font-normal" key={index}>
                <NavLink to={item.path} style={navLinkStyle}>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-[30px] align-middle">
          <Button color="isDisabled">
            <NavLink to="/signin">Sign In</NavLink>
          </Button>
          <Button color="primary">
            <NavLink to="/trial">Start For Free</NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
}

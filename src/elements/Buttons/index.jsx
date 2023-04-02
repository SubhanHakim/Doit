import React from "react";
import { Link } from "react-router-dom";

export default function Button({ childreen, type, color, ...props }) {
  const button = {
    primary: "bg-primary text-white font-semibold",
    transparent: "bg-transparent text-primary font-semibold",
    isDisabled: "bg-transparent text-grey font-semibold",
    isLight: "bg-transparent text-primary font-semibold",
  };

  const colorButton = button[color || "primary"];

  return <button className={"px-5 py-3 text-lg rounded-lg items-center " + colorButton} {...props}></button>;
}

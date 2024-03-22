import React from "react";
import Logo from "../Media/logo.png";
import { Input } from "./ui/input";

function NavigationBar() {
  return (
    <div className="w-full border-red-500 border-solid border-2">
      <img src={Logo} className="w-1/6 min-w-32" alt="logo" />
      <Input type="text" placeholder="Search" />
      <button className="w-1/3 border-solid border-2 border-red-500">
        hello
      </button>
    </div>
  );
}

export default NavigationBar;

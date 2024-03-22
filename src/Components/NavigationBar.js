import React from "react";
import Logo from "../Media/logo.png";
import { Input } from "./ui/input";
import { InputWithButton } from "./ui/InputWithButton";

function NavigationBar() {
  return (
    <div className="w-full border-gold border-solid border-4 bg-black py-2 flex flex-row justify-between">
      <img src={Logo} className="w-1/6 h-1/2 max-w-32 min-w-32" alt="logo" />

      <InputWithButton />
    </div>
  );
}

export default NavigationBar;

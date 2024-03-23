import React from "react";
import Logo from "../Media/logo.png";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import { InputWithButton } from "./ui/InputWithButton";
import { BsCart } from "react-icons/bs";
import Locationdialog from "./ui/locationdialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function NavigationBar() {
  return (
    <div className="w-full overflow-hidden border-gold border-solid border-2 bg-black py-2 flex flex-row justify-between">
      <img
        src={Logo}
        className="w-1/12 ml-2 h-1/2 max-w-32 min-w-32"
        alt="logo"
      />

      <Locationdialog />

      <InputWithButton />
      <DropdownMenu className="w-1/10 ">
        <DropdownMenuTrigger className="text-gold  flex flex-col justify-center mr-2 text-left">
          <span className="text-xs truncate ">Hello, sign in </span>
          <br />
          <span className="text-sm truncate font-bold">Account & Lists</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Login</DropdownMenuItem>
          <DropdownMenuItem>Account Settings</DropdownMenuItem>
          <DropdownMenuItem>Recent Searches</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button className="bg-black hover:bg-black">
        <div className="flex text-left flex-col mt-1 text-gold">
          <span className="text-xs">Returns</span>

          <span className="font-bold text-sm">&Orders</span>
        </div>
      </Button>

      <Button className="bg-black  hover:bg-black mr-6 relative">
        <Badge className="absolute bg-black">100</Badge>
        <BsCart className="text-4xl absolute text-gold" />
        <span className="relative text-gold left-8 text-sm top-3 font-bold">
          Cart
        </span>
      </Button>
    </div>
  );
}

export default NavigationBar;

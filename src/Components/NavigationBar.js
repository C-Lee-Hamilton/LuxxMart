import React from "react";
import Logo from "../Media/logo.png";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { InputWithButton } from "./ui/InputWithButton";
import { BsCart } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Locationdialog from "./ui/locationdialog";
import { usePageContext } from "../Context/PageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function NavigationBar() {
  const { location, updateLocation, storedLocationPlaceholder, storedAddress } =
    usePageContext();
  // const address = location.city + "," + location.state + "," + location.zip;

  return (
    <div className="w-full overflow-hidden border-gold border-solid border-2 bg-black py-2 flex flex-row justify-between">
      <Link to="/">
        <img
          src={Logo}
          className="w-1/12 ml-2 h-full max-w-32 min-w-32"
          alt="logo"
        />
      </Link>
      {/* <Locationdialog /> */}
      <Button onClick={updateLocation} className="bg-black hover:bg-black">
        <HiOutlineLocationMarker className="text-2xl mr-1 text-gold" />
        <div className="flex text-left flex-col text-xs text-gold">
          <span className="">
            {location.state == undefined
              ? storedLocationPlaceholder
              : storedAddress}
          </span>
          <span className="font-bold text-sm">Update location</span>
          {/* <span className="font-bold text-sm">{location.state}</span> */}
        </div>
      </Button>
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

          <DropdownMenuItem>
            <Link to="/login">Login</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/settings"> Account Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/searchhistory">Search History</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/search">Wish List</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link to="/ordersreturns">
        <Button className="bg-black hover:bg-black">
          <div className="flex text-left flex-col mt-1 text-gold">
            <span className="text-xs">Returns</span>

            <span className="font-bold text-sm">&Orders</span>
          </div>
        </Button>
      </Link>
      <Link to="/cart">
        <Button className="bg-black  hover:bg-black mr-6 relative">
          <Badge className="absolute bg-black">100</Badge>
          <BsCart className="text-4xl absolute text-gold" />
          <span className="relative text-gold left-8 text-sm top-3 font-bold">
            Cart
          </span>
        </Button>
      </Link>
    </div>
  );
}

export default NavigationBar;

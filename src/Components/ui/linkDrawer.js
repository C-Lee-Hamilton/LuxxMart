import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./button";
import { usePageContext } from "../../Context/PageContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./sheet";
import { Link } from "react-router-dom";
function LinkDrawer() {
  const { logOut, isLoggedIn, storedName } = usePageContext();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=" px-2 py-0 bg-greyblue" type="submit">
          <GiHamburgerMenu className="text-3xl text-darkgold" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-1/3 min-w-80 bg-greyblue h-full">
        <div className="mx-auto w-full h-full max-w-sm">
          <SheetDescription className=" mb-2 pl-4  text-offwhite mt-2 text-2xl">
            <Link to="/login">Hello, {storedName}</Link>
          </SheetDescription>
          <div className="bg-offwhite pl-4 w- mx-auto h-full flex flex-col gap-5 ">
            <SheetTitle className="mt-4">Shop By Department</SheetTitle>
            <Link to="/categories" className="text-muted-foreground">
              Home and Kitchen
            </Link>
            <Link to="/categories" className="text-muted-foreground">
              Women's Fashion
            </Link>
            <Link to="/categories" className="text-muted-foreground">
              Men's Fashion
            </Link>
            <Link to="/categories" className="text-muted-foreground">
              Metals and Gems
            </Link>
            <SheetTitle>Help & Settings</SheetTitle>
            <Link to="/settings" className="text-muted-foreground">
              Settings
            </Link>
            <Link to="/FAQ" className="text-muted-foreground">
              FAQ
            </Link>
            <SheetTitle>Customer Service</SheetTitle>
            <SheetDescription className="text-xs">
              Phone: +1 555-867-5309{" "}
            </SheetDescription>
            <SheetDescription className="text-xs">
              Email: loremIpsum@loremIpsum.com{" "}
            </SheetDescription>
            <SheetDescription className="text-xs">
              Hours: 8:00-5:30 PM EST{" "}
            </SheetDescription>
            <SheetDescription className="text-xs">
              Closed Sundays
            </SheetDescription>
            {!isLoggedIn && (
              <Link
                to="/login"
                className="w-2/3 mx-10 text-center py-4 bg-greyblue text-white  rounded-lg mt-5"
              >
                Log in or Sign up
              </Link>
            )}
            {isLoggedIn && (
              <Button
                onClick={logOut}
                className="w-2/3 mx-10 text-center py-4 bg-greyblue text-white  rounded-lg mt-5"
              >
                Sign Out
              </Button>
            )}

            <SheetClose className="" asChild>
              <Button className="w-2/3 mx-10 border-none bg-offwhite text-muted-foreground mb-0">
                Click Anywhere To Close
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default LinkDrawer;

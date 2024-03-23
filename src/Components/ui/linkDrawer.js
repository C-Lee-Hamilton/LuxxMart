import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./sheet";

function LinkDrawer() {
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
            Hello, Please Sign In
          </SheetDescription>
          <div className="bg-offwhite pl-4 w- mx-auto h-full flex flex-col gap-5 ">
            <SheetTitle className="mt-4">Shop By Department</SheetTitle>
            <SheetDescription>placeholder</SheetDescription>
            <SheetDescription>placeholder</SheetDescription>
            <SheetDescription>placeholder</SheetDescription>
            <SheetTitle>Programs</SheetTitle>
            <SheetDescription>placeholder</SheetDescription>
            <SheetDescription>placeholder</SheetDescription>
            <SheetDescription>placeholder</SheetDescription>
            <SheetTitle>Help & Settings</SheetTitle>
            <SheetDescription>placeholder</SheetDescription>
            <SheetDescription>placeholder</SheetDescription>
            <SheetDescription>placeholder</SheetDescription>

            <SheetClose className="" asChild>
              <Button className="w-2/3 mx-10  mt-20">
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

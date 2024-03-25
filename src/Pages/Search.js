import React from "react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import Results from "../Components/Results";
function Search() {
  const [searchtype, setSearchtype] = useState("A-Z");

  return (
    <div className="w-full ">
      <div className=" mx-auto w-full py-1 border-b-2 border-solid border-greyblue flex justify-between">
        <span className="ml-5">? of ? of ? Results</span>
        <DropdownMenu className="">
          <DropdownMenuTrigger className="border-2 text-center border-solid border-gray-500 rounded-lg py-1 px-2  mr-5 text-xs flex flex-row items-center">
            <span className="">Sort By: {searchtype}</span>
            <MdKeyboardArrowDown className="text-xl" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => setSearchtype("Price: High to Low")}
            >
              Price: High to Low
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSearchtype("Price: Low to High")}
            >
              Price: Low to High
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSearchtype("Popular")}>
              Popular
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSearchtype("A-Z")}>
              A-Z
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSearchtype("Recently Added")}>
              Recently Added
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div id="search block" className="flex flex-row">
        <div className="flex flex-col w-1/4 ml-5">
          <span>placeholder</span>
          <span>placeholder</span>
          <span>placeholder</span>
          <span>placeholder</span>
          <span>placeholder</span>
        </div>
        <Results />
      </div>
    </div>
  );
}

export default Search;

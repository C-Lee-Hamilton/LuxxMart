import React from "react";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Components/ui/select";

import Results from "../Components/Results";
function Search() {
  const [searchtype, setSearchtype] = useState("A-Z");

  return (
    <div className="w-full ">
      <div className=" mx-auto w-full py-1 border-b-2 border-solid border-greyblue flex justify-between">
        <span className="ml-5">? of ? of ? Results</span>

        <Select>
          <SelectTrigger className="p-2 w-1/4">
            <span className="mr-1">sort by: </span>
            <SelectValue placeholder="Popular" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="h-l">Price: High to Low</SelectItem>
              <SelectItem value="l-h"> Price: Low to High</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="a-z">A-Z</SelectItem>
              <SelectItem value="recent">Recently Added</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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

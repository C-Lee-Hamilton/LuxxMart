import React from "react";
import { Button } from "./button"
import { Input } from "./input"
import { FaSearch } from "react-icons/fa";
 
export function InputWithButton() {
  return (
    <div className="  mr-5 flex w-full min-w-80 max-w-2xl items-center space-x-0">
      <Input type="email" placeholder="Search Items" className="border-2 w-full border-gold rounded-l-lg  border-r-0 " />
      <Button className="border-2 px-2 py-0 bg-gold rounded-l-none border-l-0 border-gold hover:bg-darkgold"type="submit" >
        <FaSearch className="text-lg text-black"/>
      </Button>
    </div>
  )
}


export default InputWithButton;
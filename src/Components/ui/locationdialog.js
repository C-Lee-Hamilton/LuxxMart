import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Input } from "./input";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
function Locationdialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-black hover:bg-black">
          <HiOutlineLocationMarker className="text-3xl text-gold" />
          <div className="flex text-left flex-col text-xs text-gold">
            <span className="">No Location Set</span>
            <span className="font-bold text-sm">Update location</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-1/2">
        <DialogHeader>
          <DialogTitle className="text-center">Add Your Location</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="">
            <Input
              id="name"
              placeholder="State or Province"
              className="w-full text-center border-2 mb-2 border-gray-400"
            />
          </div>
          <div className="">
            <Input
              id="username"
              placeholder="Country"
              className="w-full border-2 text-center border-gray-400"
            />
          </div>
        </div>
        <DialogFooter className="mx-auto">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Locationdialog;

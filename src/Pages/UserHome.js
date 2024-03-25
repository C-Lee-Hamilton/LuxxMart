import React from "react";
import IndexCarousel from "../Components/ui/indexCarousel";
import ItemCarousel from "../Components/ui/itemCarousel";
function UserHome() {
  return (
    <div className="h-full flex flex-col w-full">
      <IndexCarousel />
      <div className="h-2/3 flex flex-col w-full">
        <ItemCarousel />
        <ItemCarousel />
        <ItemCarousel />
        <ItemCarousel />
        <ItemCarousel />
      </div>
    </div>
  );
}

export default UserHome;

import React from "react";
import IndexCarousel from "../Components/ui/indexCarousel";
import ItemCarousel from "../Components/ui/itemCarousel";
function UserHome() {
  return (
    <div className="h-full flex flex-col w-full">
      <IndexCarousel />

      <ItemCarousel />
      <ItemCarousel />
      <ItemCarousel />
      <ItemCarousel />
      <ItemCarousel />
    </div>
  );
}

export default UserHome;

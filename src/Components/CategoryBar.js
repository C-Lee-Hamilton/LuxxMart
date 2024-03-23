import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import LinkDrawer from "./ui/linkDrawer";

function CategoryBar() {
  const linkStyle = "flex items-center justify-center mr-4 text-gold";
  return (
    <div className="w-full bg-greyblue flex flex-row whitespace-nowrap  overflow-hidden">
      <LinkDrawer />
      <>
        <Link className={linkStyle}>Today's Deals</Link>
        <Link className={linkStyle}>Gems and Jewelry</Link>
        <Link className={linkStyle}>Home and Office</Link>
        <Link className={linkStyle}>Kitchen</Link>
        <Link className={linkStyle}>Time Pieces</Link>
        <Link className={linkStyle}>Rare Metals</Link>
        <Link className={linkStyle}>Customer Service</Link>
      </>
    </div>
  );
}

export default CategoryBar;

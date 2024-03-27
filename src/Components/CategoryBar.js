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
        <Link to="/categories" className={linkStyle}>
          Today's Deals
        </Link>
        <Link to="/categories" className={linkStyle}>
          Gems
        </Link>
        <Link to="/categories" className={linkStyle}>
          Jewelry
        </Link>
        <Link to="/categories" className={linkStyle}>
          Home and Office
        </Link>
        <Link to="/categories" className={linkStyle}>
          Kitchen
        </Link>
        <Link to="/categories" className={linkStyle}>
          Time Pieces
        </Link>
        <Link to="/categories" className={linkStyle}>
          Rare Metals
        </Link>
        <Link to="/categories" className={linkStyle}>
          Apparel
        </Link>
        <Link to="/sellerhome" className={linkStyle}>
          Seller Home
        </Link>
      </>
    </div>
  );
}

export default CategoryBar;

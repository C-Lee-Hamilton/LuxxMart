import React from "react";
import { Link } from "react-router-dom";
import SellerItemTable from "../../Components/SellerItemTable";

function SellerHome() {
  return (
    <div className="w-full flex flex-col items-center h-screen border-solid border-greyblue border-2">
      <div className="w-11/12 h-1/6 mb-10 mt-2 flex justify-start">
        <span className="border-solid w-1/4 border-2 border-red-500 h-full">
          seller photo
        </span>
        <h1 className="h-full bg-red-300 w-3/4">Store Name</h1>
      </div>
      <Link
        className="p-5 mt-0 border-solid border-greyblue border-2 bg-gold rounded-sm hover:bg-darkgold"
        to="/additem"
      >
        Add Item To Store
      </Link>
      <SellerItemTable />
    </div>
  );
}

export default SellerHome;
{
  /* should display all the sellers products
        -each will have an edit button,and delete button, beside each product to update information
          -when edit is clicked, a menu with all the items fields pops up,
                    -this will be its own page
            -each of those fields will have a save button so each is saved individually,
                
      should have an add item button
        -this will lead to a new page
          -it will include a place for description, pictures, prices, sales, etc
           */
}

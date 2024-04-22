import React from "react";
import { Link } from "react-router-dom";
import { usePageContext } from "../../Context/PageContext";
import SellerItemTable from "../../Components/SellerItemTable";
import Photobar from "../../Components/sellerComponents/photobar";
function SellerHome() {
  const { storedName } = usePageContext();
  return (
    <div className="w-full flex flex-col bg-offwhite min-h-screen border-solid border-greyblue border-2">
      <Photobar />

      <Link
        className="px-3 py-1 mx-auto mt-10 border-solid border-greyblue border-2 bg-gold rounded-sm hover:bg-darkgold"
        to="/additem"
      >
        Add Item To Store
      </Link>
      <SellerItemTable />
      <h1 className="   rounded-lg bg-black text-darkgold mt-10 w-11/12 mx-auto py-5  underline text-5xl flex  justify-center ">
        {storedName}
      </h1>
    </div>
  );
}

export default SellerHome;

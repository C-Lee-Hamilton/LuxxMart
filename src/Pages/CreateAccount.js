import React from "react";
import CreateCard from "../Components/ui/createCard";
import { Link } from "react-router-dom";
import Logo from "../Media/logo.png";

function CreateAccount() {
  return (
    <div className="flex bg-black border-gold border-2 border-solid flex-col  h-screen items-center">
      <Link to="/" className="w-1/6 mt-2 mb-2">
        <img src={Logo} alt="" className="w-full" />
      </Link>
      <CreateCard />

      <Link
        to="/login"
        className="w-2/5 bg-white mt-10 rounded-lg text-center text-sm p-3"
      >
        Continue to Login
      </Link>
    </div>
  );
}
export default CreateAccount;

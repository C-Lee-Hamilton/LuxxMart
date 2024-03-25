import React from "react";
import LoginCard from "../Components/ui/loginCard";
import { Link } from "react-router-dom";
import Logo from "../Media/logo.png";
import { LucideNavigation } from "lucide-react";

function Login() {
  return (
    <div className="flex bg-black border-gold border-2 border-solid flex-col  h-screen items-center">
      <Link to="/" className="w-1/6 mt-2 mb-2">
        <img src={Logo} alt="" className="w-full" />
      </Link>
      <LoginCard />
      <div className="w-2/5  justify-center items-center flex flex-row">
        <div className="w-1/3 mr-1 text-red mt-10 border border-solid border-offwhite"></div>
        <h1 className="text-offwhite text-center text-xs mt-10 w-1/3">
          New To LuxxMart?
        </h1>
        <div className="w-1/3 ml-1 text-red mt-10 border border-solid border-offwhite"></div>
      </div>

      <Link
        to="/createAccount"
        className="w-2/5 bg-white mt-10 rounded-lg text-center text-sm p-3"
      >
        Create Your Luxx Account
      </Link>
    </div>
  );
}

export default Login;

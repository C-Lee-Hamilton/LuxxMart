import React from "react";
import LoginCard from "../Components/loginCards/loginCard";
import { Link } from "react-router-dom";
import Logo from "../Media/logo.png";
import { LucideNavigation } from "lucide-react";
import { Outlet } from "react-router-dom";
function Login() {
  return (
    <div className="flex bg-black border-gold border-2 border-solid flex-col  h-screen items-center">
      <Link to="/" className="w-1/6 mt-2 mb-2">
        <img src={Logo} alt="" className="w-full" />
      </Link>

      <Outlet />
    </div>
  );
}

export default Login;

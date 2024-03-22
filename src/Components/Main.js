import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
function Main() {
  return (
    <div className="">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default Main;

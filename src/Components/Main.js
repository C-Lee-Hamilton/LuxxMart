import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import CategoryBar from "./CategoryBar";
function Main() {
  return (
    <div className="h-full">
      <NavigationBar />
      <CategoryBar />
      <Outlet />
    </div>
  );
}

export default Main;

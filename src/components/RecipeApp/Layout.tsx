import React from "react";
import { Outlet } from "react-router-dom";
import RecipeNavBar from "./RecipeNavBar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <RecipeNavBar />
      <Outlet />
    </div>
  );
}

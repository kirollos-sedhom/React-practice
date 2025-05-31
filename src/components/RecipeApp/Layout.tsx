import React from "react";
import { Outlet } from "react-router-dom";
import RecipeNavBar from "./RecipeNavBar";

export default function Layout() {
  return (
    <div>
      <RecipeNavBar />
      <Outlet />
    </div>
  );
}

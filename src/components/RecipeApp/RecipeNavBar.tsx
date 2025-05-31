import React from "react";
import { Link } from "react-router-dom";

export default function RecipeNavBar() {
  // LOGO========SEARCHBAR=====HOME|FAVORITES
  return (
    <div className="flex items-center justify-between shadow-sm">
      <img src="/recipes/logo2.png" alt="app logo" className="w-20" />
      <input
        type="text"
        className="border-1 border-amber-400/50 rounded-md outline-none focus:border-amber-500 px-2 py-1"
        placeholder="let's cook!"
      />
      <div className="navigation flex gap-2 mr-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/favorites"}>Favorites</Link>
      </div>
    </div>
  );
}

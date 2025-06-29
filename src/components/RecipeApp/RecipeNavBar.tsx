import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, replace, useNavigate } from "react-router-dom";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { RecipeContext } from "./RecipeApp";

export default function RecipeNavBar() {
  // const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { setRecipeData } = useContext(RecipeContext);

  const navigate = useNavigate();
  async function getData(query: string) {
    const APIkey = import.meta.env.VITE_RECIPE_KEY;
    const limit = 10;
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${limit}&addRecipeInformation=true&apiKey=${APIkey}`;
    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(URL);
      if (!response.ok) {
        console.log("response error");
      }
      const json = await response.json();
      console.log(json);
      setRecipeData(json.results); //working
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  function handleInputKeyPressed(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      console.log("searching...");
      getData(searchValue);
      setSearchValue("");
      navigate("/recipe-app", { replace: true });
    } else {
      return;
    }
  }

  // LOGO========SEARCHBAR=====HOME|FAVORITES
  return (
    <div className="flex items-center justify-between shadow-sm">
      <img src="/recipes/logo5.png" alt="app logo" className="w-15 p-2" />
      <div className="search flex items-center border-1 border-amber-400/50  focus-within:border-amber-500 md:w-94 h-8 px-2 py-1 rounded-md ">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="let's cook!"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={handleInputKeyPressed}
        />
        <BiSolidSearchAlt2
          className="text-xl ml-auto cursor-pointer"
          onClick={() => getData(searchValue)}
        />
      </div>
      <div className="navigation flex gap-2 mr-4">
        <NavLink
          to={"/recipe-app"}
          className={({ isActive }) =>
            isActive ? "text-amber-600 font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/recipe-app/favorites"}
          className={({ isActive }) =>
            isActive ? "text-amber-600 font-bold" : ""
          }
        >
          Favorites
        </NavLink>
      </div>
    </div>
  );
}

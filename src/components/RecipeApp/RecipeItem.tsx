import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

import { Recipe, RecipeContext } from "./RecipeApp";
export default function RecipeItem(props: Recipe) {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(RecipeContext);
  if (isInFavorites(props)) {
    console.log(props.title, "is in favorites");
  }
  return (
    <div className="border-1 border-slate-300 rounded-xl h-64 w-64 flex flex-col overflow-hidden relative">
      <img src={props.image} alt={props.title} className="w-full h-full" />
      {isInFavorites(props) ? (
        <FaHeart
          className="absolute top-5 right-5 fill-white"
          onClick={() => handleHeartClick(props)}
        />
      ) : (
        <FaHeart
          className="absolute top-5 right-5"
          onClick={() => handleHeartClick(props)}
        />
      )}

      <div className="absolute bottom-0 bg-slate-300/60 w-full p-2">
        <p className="font-bold text-slate-900 truncate">{props.title}</p>
        <span className="flex items-center gap-1">
          <IoIosTimer />
          <p>{props.readyInMinutes} mins</p>
        </span>
      </div>
    </div>
  );
  function handleHeartClick(recipe: Recipe) {
    if (isInFavorites(recipe)) {
      removeFromFavorites(recipe);
    } else {
      addToFavorites(recipe);
    }
  }
  function addToFavorites(recipe: Recipe) {
    const newFavorites = [...favoriteRecipes];
    newFavorites.push(recipe);
    setFavoriteRecipes(newFavorites);
    localStorage.setItem("favoriteRecipes", JSON.stringify(newFavorites));
  }

  function removeFromFavorites(recipe: Recipe) {
    const newFavorites = favoriteRecipes.filter((item) => item.id != recipe.id);
    setFavoriteRecipes(newFavorites);
    localStorage.setItem("favoriteRecipes", JSON.stringify(newFavorites));
  }

  function isInFavorites(recipe: Recipe) {
    return favoriteRecipes.some((item) => item.id === recipe.id);
  }
}

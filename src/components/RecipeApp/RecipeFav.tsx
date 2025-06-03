import React, { useContext } from "react";
import { RecipeContext } from "./RecipeApp";
import RecipeItem from "./RecipeItem";
import { Recipe } from "./RecipeApp";
export default function RecipeFav() {
  const storageFavoriteRecipes = localStorage.getItem("favoriteRecipes");
  console.log("found in storage:", storageFavoriteRecipes);
  const { favoriteRecipes } = useContext(RecipeContext);

  const updatedFavoriteRecipes: Recipe[] = storageFavoriteRecipes
    ? JSON.parse(storageFavoriteRecipes)
    : favoriteRecipes;
  return (
    <div className="flex-1 flex pt-8 justify-center gap-4 flex-wrap">
      {updatedFavoriteRecipes.length ? (
        updatedFavoriteRecipes.map((item) => {
          return (
            <RecipeItem
              id={item.id}
              key={item.id}
              title={item.title}
              image={item.image}
              readyInMinutes={item.readyInMinutes}
              sourceName={item.sourceName}
              servings={item.servings}
            />
          );
        })
      ) : (
        <div className="w-full flex items-center justify-center">
          <p className="text-xl text-gray-900/60 font-semibold">
            No favorites added yet :c
          </p>
        </div>
      )}
    </div>
  );
}

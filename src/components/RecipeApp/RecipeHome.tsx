import React, { useContext } from "react";
import { RecipeContext } from "./RecipeApp";

export default function RecipeHome() {
  const { recipeData } = useContext(RecipeContext);
  console.log(recipeData);
  return (
    <div className="flex-1 flex items-center justify-center">
      {recipeData ? (
        <p>found something</p>
      ) : (
        <p className="text-xl text-gray-900/60 font-semibold">
          What Delicacy shall we try today?
        </p>
      )}
    </div>
  );
}

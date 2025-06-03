import React, { useContext } from "react";
import { RecipeContext } from "./RecipeApp";
import RecipeItem from "./RecipeItem";

export default function RecipeHome() {
  const { recipeData } = useContext(RecipeContext);
  console.log("recipe data:", recipeData);
  return (
    <div className="flex-1 flex pt-8 justify-center gap-4 flex-wrap">
      {recipeData.length ? (
        recipeData.map((item) => {
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
            What Delicacy shall we try today?
          </p>
        </div>
      )}
    </div>
  );
}

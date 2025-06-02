import React, { useContext } from "react";
import { RecipeContext } from "./RecipeApp";
import RecipeItem from "./RecipeItem";

export default function RecipeHome() {
  const { recipeData } = useContext(RecipeContext);
  console.log("recipe data:", recipeData);
  return (
    <div className="flex-1 flex p-4 justify-center gap-4 flex-wrap">
      {recipeData.length ? (
        recipeData.map((item) => {
          return (
            <RecipeItem
              key={item.id}
              title={item.title}
              image={item.image}
              likes={item.likes}
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

import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeHome from "./RecipeHome";
import RecipeFav from "./RecipeFav";
import Layout from "./Layout";
/*
todo
extend the width of the text input to fill the search box

update the shape of the heart to be visible

on searching > navigate to the home to show search results

on clicking the details button, navigate to /recipeID
its a page that will contain the recipe image
its source
name
add to favouites button
ingredients


clicking the "favorites" button from the navbar:
allows you to see all your favorite recipes
*/
type RecipeContextType = {
  recipeData: Recipe[];
  favoriteRecipes: Recipe[];
  setRecipeData: React.Dispatch<React.SetStateAction<Recipe[]>>;
  setFavoriteRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

export type Recipe = {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
};
export const RecipeContext = createContext<RecipeContextType>({
  recipeData: [],
  favoriteRecipes: [],
  setRecipeData: () => {},
  setFavoriteRecipes: () => {},
});

export default function RecipeApp() {
  const [recipeData, setRecipeData] = useState<Recipe[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  return (
    <RecipeContext.Provider
      value={{ recipeData, favoriteRecipes, setRecipeData, setFavoriteRecipes }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<RecipeHome />} />
            <Route path="/favorites" element={<RecipeFav />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecipeContext.Provider>
  );
}

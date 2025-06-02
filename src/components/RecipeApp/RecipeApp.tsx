import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeHome from "./RecipeHome";
import RecipeFav from "./RecipeFav";
import Layout from "./Layout";
/*
todo
homepage with navbar at the top that contains:
LOGO========SEARCHBAR=====HOME|FAVORITES
empty space waiting for you to search
.
when searching for a recipe, instead of the empty space 
you should see many [CARD] components that represent suggestions of recipes

RECIPE CARD:
simple component that contains:
===
recipe image
source
name
button for recipe details
===

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
  setRecipeData: React.Dispatch<React.SetStateAction<never[]>>;
};

type Recipe = {
  id: number;
  title: string;
  image: string;
  likes: number;
};
export const RecipeContext = createContext<RecipeContextType>({
  recipeData: [],
  setRecipeData: () => {},
});

export default function RecipeApp() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <RecipeContext.Provider value={{ recipeData, setRecipeData }}>
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

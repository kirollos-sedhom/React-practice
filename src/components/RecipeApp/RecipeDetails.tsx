import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*
show recipe 
image | ingerdients
steps
*/
type RecipeResponse = {
  image: string;
  title: string;
  sourceUrl: string;
  extendedIngredients: Ingredient[];
  summary: string;
  analyzedInstructions: AnalyzedInstructionsType[];
  steps: Step[];
};

type Ingredient = {
  id: number;
  name: string;
  nameClean: string;
  original: string; // use this
};

type AnalyzedInstructionsType = {
  name: string;
  steps: Step[];
};

type Step = {
  number: number;
  step: string;
};
export default function RecipeDetails() {
  const { id } = useParams();
  const [recipeInformation, setRecipeInformation] =
    useState<RecipeResponse | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function getInformation() {
    setIsLoading(true);
    setError("");
    const APIkey = import.meta.env.VITE_RECIPE_KEY;

    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIkey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("response error");
      }
      const json = await response.json();
      console.log(json);
      setRecipeInformation(json);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getInformation();
  }, []);

  return isLoading ? (
    <p>loading</p>
  ) : (
    <div className="flex flex-col gap-2">
      <div className="hero mt-8 md:flex md:items-center md:justify-center text-center">
        <img
          className="w-full md:w-1/2 max-w-114 rounded-md"
          src={recipeInformation?.image}
          alt={recipeInformation?.title}
        />
        <h1 className="text-xl font-semibold p-4">
          {recipeInformation?.title}
        </h1>
      </div>
      <div className="ingredients p-4">
        <h2 className="text-xl text-amber-800">Ingredients:</h2>
        {recipeInformation?.extendedIngredients.map((ingredient) => {
          return (
            <li className="text-lg my-1" key={ingredient.id}>
              {ingredient.original}
            </li>
          );
        })}
      </div>

      <div className="steps p-4">
        <h2 className="text-xl text-amber-800">Steps:</h2>
        <ol className="list-decimal pl-4 ">
          {recipeInformation?.analyzedInstructions[0].steps.map((item) => {
            return (
              <li className="text-lg my-2" key={item.number}>
                {item.step}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

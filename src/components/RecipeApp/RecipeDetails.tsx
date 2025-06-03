import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type RecipeResponse = {
  name: string;
  steps: Step[];
};

type Step = {
  equipment: string[];
  step: string;
};
export default function RecipeDetails() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<RecipeResponse | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  async function getData() {
    setIsLoading(true);
    setError("");
    const APIkey = import.meta.env.VITE_RECIPE_KEY;

    const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${APIkey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("response error");
      }
      const json = await response.json();

      console.log(json[0]);
      setRecipeData(json[0]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  //   console.log(recipeId);
  return isLoading ? (
    <p>loading</p>
  ) : (
    <div className="flex flex-col gap-2">
      {" "}
      {recipeData?.steps.map((item, index) => {
        return <p key={index}>{item.step}</p>;
      })}
    </div>
  );
}

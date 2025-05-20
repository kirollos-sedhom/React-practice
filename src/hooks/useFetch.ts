import React, { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function getData(url: string) {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const json = await response.json();

      return json;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData(url).then((json) => setData(json));
  }, [url]);

  return { data, isLoading, error };
}

import React, { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData(url).then((json) => setData(json));
  }, [url]);

  return data;
}
async function getData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    const json = await response.json();

    console.log("useFetch response:", json);
    return json;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
}

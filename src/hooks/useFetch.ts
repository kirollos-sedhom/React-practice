import React, { useEffect, useState } from "react";

export default function useFetch(
  url: string,
  resource?: string,
  query?: Record<string, string>
) {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData(url, resource, query).then((json) => setData(json));
  }, [url]);

  return data;
}
async function getData(
  url: string,
  resource?: string,
  query?: Record<string, string>
) {
  let completeURL = url;
  if (resource) {
    completeURL = `${completeURL}/${resource}`;
  }

  if (query) {
    const params = new URLSearchParams(query);
    const queryString = params.toString();
    completeURL = `${completeURL}?${queryString}`;
  }
  try {
    const response = await fetch(completeURL);
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

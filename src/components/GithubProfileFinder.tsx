import React, { useEffect, useRef, useState } from "react";

/*
you should use github public api to fetch user details
get name , profile link , join date, public repos, followers, following


*/

const GithubProfileFinder = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="flex flex-col items-center">
      <div className="search_menu flex gap-4 mt-4">
        <input
          ref={inputRef}
          className="border-2 border-black/30 rounded-sm px-2 "
          type="text"
          placeholder="find a person"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-300 px-3 py-1 rounded-md"
        >
          search
        </button>
      </div>
    </div>
  );

  function handleSearch() {
    if (inputRef.current) {
      console.log(inputRef.current.value);

      getData(inputRef.current.value);
    } else {
      console.log("please write something");
    }
  }

  async function getData(userName: string) {
    setIsLoading(true);
    const github_token = import.meta.env.VITE_GITHUB_TOKEN;
    const url = `https://api.github.com/users/${userName}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`response status ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
};

export default GithubProfileFinder;

import React, { useRef } from "react";

/*
you should use github public api to fetch user details
get name , profile link , join date, public repos, followers, following


*/

const GithubProfileFinder = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
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
    } else {
      console.log("please write something");
    }
  }
};

export default GithubProfileFinder;

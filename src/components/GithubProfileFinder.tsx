import { CiLink } from "react-icons/ci";

import React, { useEffect, useRef, useState } from "react";
import { p } from "framer-motion/client";
type GithubProfile = {
  avatar_url: string;
  login: string;
  location: string;
  name: string;
  public_repos: number;
  join_date: string;
  followers: number;
  following: number;
  html_url: string;
};

type usersSearchResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: GithubProfile[];
};
/*
you should use github public api to fetch user details
get name , profile link , join date, public repos, followers, following


*/

const GithubProfileFinder = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputContent, setInputContent] = useState<string>("");
  const [data, setData] = useState<GithubProfile | null>(null);
  const [suggestedUsers, setSuggestedUsers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(suggestedUsers);
  }, [suggestedUsers]);

  // text reccomendation effect
  useEffect(() => {
    if (!inputContent) {
      return;
    }

    const delay = setTimeout(() => {
      findUsersWithText(inputContent).then((response: usersSearchResponse) =>
        FillSuggestedUsersWithNamesOnly(response.items)
      );
    }, 500);

    return () => clearTimeout(delay);
  }, [inputContent]);
  return (
    <div className="flex flex-col items-center">
      <div className="search_menu flex gap-4 mt-4">
        <div className="search_and_suggestion">
          <input
            ref={inputRef}
            onChange={(e) => setInputContent(e.target.value)}
            className="border-2 border-black/30 rounded-sm px-2 "
            type="text"
            value={inputContent}
            placeholder="find a person"
          />

          <div className="dropdown-list  shadow-xl p-2 rounded-md">
            {suggestedUsers.map((user, index) => {
              if (index > 8) {
                return null;
              } else {
                return (
                  <p
                    className="hover:bg-slate-200"
                    onClick={() => setInputContent(user)}
                  >
                    {user}
                  </p>
                );
              }
            })}
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-300 px-3 py-1 rounded-md self-start"
        >
          search
        </button>
      </div>

      <div>
        {data ? (
          <div className="profile my-4 flex flex-col items-center gap-2">
            <img
              className="rounded-full w-38"
              src={data.avatar_url}
              alt={`image of ${data.name}`}
            />
            <p className="flex items-center gap-2 text-xl font-medium">
              <a href={data.html_url}>{data.name}</a>
            </p>

            <div className="info flex gap-4">
              <div className="repos flex flex-col items-center">
                <p className="font-bold">Repos</p>
                <p>{data.public_repos}</p>
              </div>

              <div className="followers flex flex-col items-center">
                <p className="font-bold">Followers</p>
                <p>{data.followers}</p>
              </div>

              <div className="following flex flex-col items-center">
                <p className="font-bold">Following</p>
                <p>{data.following}</p>
              </div>
            </div>
          </div>
        ) : null}
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
  async function findUsersWithText(text: string) {
    const url = `https://api.github.com/search/users?q=${text}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
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

  function FillSuggestedUsersWithNamesOnly(users: GithubProfile[]) {
    const newSuggestedUsers: string[] = [];
    users.map((user) => newSuggestedUsers.push(user.login));
    setSuggestedUsers(newSuggestedUsers);
  }
};

export default GithubProfileFinder;

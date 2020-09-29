import { useState } from "react";
import Card from "../components/Card";

export default function IndexPage() {
  const baseURL = "https://api.github.com";
  const [language, setLanguage] = useState("");
  const [repos, setRepos] = useState({});

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const fetchRepos = async () => {
    const url = `${baseURL}/search/issues?q=language:${language}&per_page=4&sort=asc`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(url);
    setRepos(data);
  };

  return (
    <div>
      <h1 className="text-xl text-center ">HacktoberFest Search</h1>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Label
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-last-name"
              placeholder="Enter Language Name"
              value="Javascript"
              onChange={(e) => handleLanguage(e)}
            >
              Language
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={() => fetchRepos()}
      >
        Search
      </button>

      {repos.total_count > 0 && repos.items.map((repo) => <Card repo={repo} />)}
    </div>
  );
}

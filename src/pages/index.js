import { useState } from "react";
import Card from "../components/Card";

export default function IndexPage() {
  const baseURL = "https://api.github.com";
  const [language, setLanguage] = useState("");
  const [repos, setRepos] = useState({});
  const [page, setPage] = useState(1);
  const [label, setLabel] = useState("");

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const handleLabel = (e) => {
    let labelList = e.target.value.split(",");
    let localLabel = "";
    labelList.map((i) => {
      localLabel += `label:"${i}"+`;
    });
    setLabel(localLabel);
  };

  const fetchRepos = async () => {
    console.log(language, label)
    const url = `${baseURL}/search/issues?q=language:${language}+${label}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRepos(data);
  };

  return (
    <div className="m-5">
      <h1
        className="text-4xl text-center"
        style={{
          fontFamily: "Inter Black",
        }}
      >
        HacktoberFest Search
      </h1>

      <div className="flex flex-wrap justify-center mx-auto overflow-hidden ">
        <div className="my-2 px-2 w-full overflow-hidden lg:w-1/3 xl:w-1/3">
          <div className="flex">
            <span className="text-sm border border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">
              Labels
            </span>
            <input
              name="field_name"
              className=" border-2 rounded-r px-4 py-2 w-full outline-none"
              type="text"
              placeholder="hacktoberfest, bug, good first issue"
              onChange={(e) => handleLabel(e)}
            />
          </div>
        </div>

        <div className="my-2 px-2 w-full overflow-hidden lg:w-1/3 xl:w-1/3">
          <div className="flex">
            <span className="text-sm  border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">
              Language
            </span>
            <input
              name="field_name"
              className=" border-2 rounded-r px-4 py-2 w-full outline-none"
              type="text"
              placeholder="JavaScript"
              onChange={(e) => handleLanguage(e)}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  fetchRepos();
                }
              }}
            />
          </div>
        </div>

        <div className="my-2 px-2 ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={() => fetchRepos()}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly my-10 overflow-hidden ">
        {repos.total_count > 0 &&
          repos.items.map((repo, i) => <Card key={i} repo={repo} />)}
      </div>

      {repos.total_count == 0 && (
        <h1
          className="text-3xl text-center"
          style={{
            fontFamily: "Inter Black",
          }}
        >
          No Results Found. Please check the spelling and Try Again.
        </h1>
      )}

      <footer>
        <h1 className="text-2xl text-center">
          Made with ♥ by{" "}
          <a
            style={{
              fontFamily: "Inter Black",
              color: "red",
            }}
            className="underline"
            href="https://shubhamverma.me"
          >
            Shubham Verma
          </a>
        </h1>
      </footer>

      <a
        href="https://github.com/ShubhamVerma1811/hacktoberfest-search"
        className="github-corner"
        aria-label="View source on GitHub"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 250 250"
          style={{
            fill: "#151513",
            color: "#fff",
            position: "absolute",
            top: 0,
            border: 0,
            right: 0,
          }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{
              transformOrigin: "130px 106px",
            }}
            className="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          ></path>
        </svg>
      </a>
      <style>
        {`
  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
  `}
      </style>
    </div>
  );
}

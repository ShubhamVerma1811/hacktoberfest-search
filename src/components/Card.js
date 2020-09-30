import React, { Fragment } from "react";

const Card = ({ repo }) => {
  return (
    <Fragment>
      <div className="my-2 px-2 bg-white overflow-hidden lg:w-1/3 xl:w-1/3 md:w-1/2 shadow-xl hover:shadow-2xl">
        <div>
          <div className="flex justify-between border-gray-100 px-5 py-4">
            <div>
              <i className="text-orange-500"></i>
              <span className="font-bold text-gray-700 text-lg">
                {repo.title}
              </span>
            </div>
            <div>
              {repo.state === "closed" ? (
                <button>
                  Status{" "}
                  <i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i>
                </button>
              ) : (
                <button>
                  Status{" "}
                  <i className="fa fa-check-circle text-green-500 hover:text-green-600 transition duration-150"></i>
                </button>
              )}
            </div>
          </div>

          <div className="px-10 py-5 text-gray-600">
            {repo.body.length > 0 ? (
              repo.body.substr(0, 100) + "..."
            ) : (
              <p>No description provided</p>
            )}
          </div>

          <div className="flex flex-wrap">
            {repo.labels.map((label) => (
              <div className="px-3 py-4">
                <span
                  className="inline-block rounded-full px-2 py-1 text-sm font-semibold text-white mr-2"
                  style={{
                    background: `#${label.color}`,
                  }}
                >
                  {label.name}
                </span>
              </div>
            ))}
          </div>

          <div className="px-5 py-4 flex justify-end">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Visit Issue
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;

import React from "react";

const Card = ({ repo }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
      <div class="flex justify-center items-center h-screen">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{repo.title}</div>
            <p class="text-gray-700 text-base">
              {repo.body.substr(0, 100)} . . .
            </p>
          </div>
          {repo.labels.map((label) => (
            <div class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {label.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

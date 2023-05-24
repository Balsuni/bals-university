import { CloseSquare } from "iconsax-react";
import React, { useState } from "react";

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = () => {
    if (query.trim() !== "") {
      // Perform search with the query

      // Add the query to the search history
      setSearchHistory((prevHistory) => [query, ...prevHistory]);

      // Clear the search input
      setQuery("");
    }
  };

  return (
    <div className="flex flex-col mt-24 ml-24 w-[350px]">
      <div className="flex flex-row items-center justify-between ">
        {query ? (
          ""
        ) : (
          <img
            className="w-[16px] absolute pointer-events-none"
            src="/assets/search.svg"
            alt="search"
          />
        )}
        <form action="submit">
          <input
            type="text"
            value={query}
            name="search"
            autoComplete="off"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            className="text-darkblue-500 text-3 h-10 pl-7 bg-gray-200 w-[290px] focus:outline-none  "
          />
        </form>
        {query ? (
          <CloseSquare
            size="23"
            color="#162A5A"
            onClick={() => setQuery("")}
            className="absolute ml-[260px] "
          />
        ) : (
          ""
        )}
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-red-500 rounded"
        >
          Search
        </button>
      </div>
      <div>
        <ul className="mt-2 list-disc list-inside">
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;

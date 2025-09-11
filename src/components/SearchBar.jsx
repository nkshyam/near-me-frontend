import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searching for query", query);
  };

  return (
    <form onSubmit={handleSearch} className=" bg-white border-amber-50 px-3 rounded-sm shadow-md">
      <input
        type="text"
        placeholder="Search for restaurent"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=""
      />

      <button type="submit" className="">
        <CiSearch />
      </button>
    </form>
  );
}

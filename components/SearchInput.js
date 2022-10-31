import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = ({ onSearch, searchedValue }) => {
  return (
    <div>
      <input
        className="search_input"
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Search for a country"
        onChange={onSearch}
        value={searchedValue}
      />
      <AiOutlineSearch />
    </div>
  );
};

export default SearchInput;

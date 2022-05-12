import React from "react";
import Card from "../shared/Card";

export default function SearchFavorites({ search, setSearch }) {
  return (
    <Card>
      <h2>Search Task from Task List</h2>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Task"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </Card>
  );
}
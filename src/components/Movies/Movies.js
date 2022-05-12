import { useState, useEffect } from "react";
import Movie from "./Movie";

export default function Movies() {
  const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=73f7b33b24f8f6584d374f54e29ef7a0&page=1";
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=73f7b33b24f8f6584d374f54e29ef7a0&query=";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      fetch(SEARCH_API+search)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });

      setSearch("");
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
    <header>
      <form onSubmit={handleSubmit}>
        <input type="search" value={search} onChange={handleChange}/>
      </form>
  </header>
    <div>
      {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
    </>
  );
}
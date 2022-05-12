import { useState, useContext } from "react";
import MovieContext from "../context/MovieContext";
import SearchFavorites from "./SearchFavorites";
import Movie from "./Movie";
import Spinner from "../shared/Spinner";

export default function Favorites() {
  const { movieList, isLoading } = useContext(MovieContext);

  const [search, setSearch] = useState("");

  const result = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

//   const result = movieList;

  if (!isLoading && (!result || result.length === 0)) {
    return <p>No Movies</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <SearchFavorites search={search} setSearch={setSearch} />
      {result.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.data.title}
          overview={movie.data.overview}
          movie={movie.data}
        />
      ))}
    </div>
  );
}
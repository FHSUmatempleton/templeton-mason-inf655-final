import { useContext } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import React from "react";
import PropTypes from "prop-types";
import Card from "../shared/Card";
import MovieContext from "../context/MovieContext";

export default function Movie({ id, title, poster_path, release_date, video, overview, movie }) {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const { favorite } = useContext(MovieContext);

  return (
    <Card>
        <img src={IMG_API + poster_path} className="movieImg" alt={title} />
      <div>
        {title}
      </div>
      <div>
        {release_date}
      </div>
      <div>
        {video}
      </div>
      <div>
        {overview}
      </div>
      <button onClick={() => favorite({ ...id})} className="delete">
        <FaTrashAlt />
      </button>
    </Card>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
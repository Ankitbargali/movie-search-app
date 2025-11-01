import React from "react";

const MovieCard = ({ movie }) => {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/310x460/1f2123/ffffff?text=No+Poster+Available";

  return (
    <div className="movie">
      <div className="movie-year">
        <p>{movie.Year}</p>
      </div>

      <div className="movie-poster">
        <img src={poster} alt={movie.Title} />
      </div>

      <div className="movie-info">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

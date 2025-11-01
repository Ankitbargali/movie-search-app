import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

// API URL from your .env file
const API_URL = process.env.REACT_APP_MOVIES_API_URL;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error handling

  const searchMovies = async (title) => {
    if (!title) return;
    setLoading(true); // Start loader
    setError(null);

    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("No movies found!");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    }

    setLoading(false); // Stop loader
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1 className="title">🎬 Movie Explorer</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search your favorite movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search-btn" onClick={() => searchMovies(searchTerm)}>
          Search
        </button>
      </div>

      {/*  Loading Spinner */}
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Fetching movies...</p>
        </div>
      )}

      {/*  Error Message */}
      {error && !loading && (
        <div className="empty">
          <h2>{error}</h2>
        </div>
      )}

      {/*  Movie List */}
      {!loading && !error && movies?.length > 0 && (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

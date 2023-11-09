import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Favourite.css";
const Favourite = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    let fav = JSON.parse(localStorage.getItem("favorites"))
    setMovies(fav)
  }, [])

  return (
    <div className="divroot5">
    <nav className="navbar navbar-expand-lg  bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">Movies</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <div>
  {movies.map((movie, index) => (
    <div key={movie.id} className="movie-card">
            {<div className="card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <Link className="card-title" to={`/MoviePage/${movie.id}`}>{movie.original_title}</Link>
            </div>
          </div>}
          </div>
  ))}
  </div>

      </div>
  );
};

export default Favourite;

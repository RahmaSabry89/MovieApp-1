import React ,{ useState }  from "react";
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import "../components/Home.css";
const Home = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [movies, setMovies] = useState({
      '1': [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }],
      '2': [{ id: 3, title: 'Movie 3' }, { id: 4, title: 'Movie 4' }],
      '3': [{ id: 5, title: 'Movie 5' }, { id: 6, title: 'Movie 6' }],
    });
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const renderMovieCards = () => {
      if (selectedOption && movies[selectedOption]) {
        return movies[selectedOption].map((movie) => (
          <div key={movie.id} className="movie-card">
            {<div class="card">
            <img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <Link class="card-title" to="/MoviePage">Movie Name</Link>
            </div>
          </div>}
          </div>
        ));
      } else {
        return <p>No movies available for the selected option</p>;
      }
    };

  return (
    <div className="divroot3">
    <nav class="navbar navbar-expand-lg  bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" href="#">Movies</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <select
  className="form-select"
  aria-label="Default select example"
  onChange={handleOptionChange}
>
  <option selected disabled>
    Open this select menu
  </option>
  <option value="1">Top Movies</option>
  <option value="2">Upcoming Movies</option>
  <option value="3">Now Playing Movies</option>
</select>

<div className="movie-container">{renderMovieCards()}</div>
   
      </div>
  );
};

export default Home;

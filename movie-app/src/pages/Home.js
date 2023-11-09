import React ,{ useState ,useEffect }  from "react";
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import "../components/Home.css";
import gettop from "../api/topMovies";
import getupcoming from "../api/upcomingMovies";
import getnow from "../api/nowMovies";
const Home = () => {
    const [selectedOption, setSelectedOption] = useState('');
    useEffect(()=> {
      if(selectedOption === "1"){
        gettop().then(top => {
          setMovies(top.data.results)
        })
      }else if(selectedOption === "2"){
        getupcoming().then(top => {
          setMovies(top.data.results)
        })
      }else if(selectedOption === "3"){
        getnow().then(top => {
          setMovies(top.data.results)
        })
      }
    },[selectedOption])
    const [movies, setMovies] = useState();
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const renderMovieCards = () => {
      if (selectedOption && movies) {
        return movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            {<div className="card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <Link className="card-title" to={`/MoviePage/${movie.id}`}>{movie.original_title}</Link>
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
    <nav className="navbar navbar-expand-lg  bg-light" >
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">Movies</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <select
  className="form-select"
  aria-label="Default select example"
  onChange={handleOptionChange}
>
  <option value={0}>
     Select Genre
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

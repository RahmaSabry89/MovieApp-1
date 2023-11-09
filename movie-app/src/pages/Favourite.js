import React from "react";
import {Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Favourite.css";
const Favourite = () => {
  

  return (
    <div className="divroot5">
    <nav class="navbar navbar-expand-lg  bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" href="#">Movies</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <div class="row" >
    <div class="col"> <div class="card">
    <img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <Link class="card-title" >Remove From Favourite</Link>
    </div>
  </div>
</div>
    <div class="col"> <div class="card">
    <img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <Link class="card-title" to="/MoviePage">Remove From Favourite</Link>
    </div>
  </div>
</div>
<div class="col"> <div class="card">
<img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
  <Link class="card-title" to="/MoviePage">Remove From Favourite</Link>
</div>
</div>
</div> 
<div class="col"> <div class="card">
<img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
  <Link class="card-title" to="/MoviePage">Remove From Favourite</Link>
</div>
</div>
</div>
<div class="col"> <div class="card">
<img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
  <Link class="card-title" to="/MoviePage">Remove From Favourite</Link>
</div>
</div>
</div>
<div class="col"> <div class="card">
<img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
  <Link class="card-title" to="/MoviePage">Remove From Favourite</Link>
</div>
</div>
</div>
<div class="col"> <div class="card">
<img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
  <Link class="card-title" to="/MoviePage">Remove From Favourite</Link>
</div>
</div>
</div>
<div class="col"> <div class="card">
<img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
  <Link class="card-title" to="/MoviePage">Remove From Favourite</Link>
</div>
</div>
</div>
  </div>
 

      </div>
  );
};

export default Favourite;

import React from "react";
import {Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/MoviePage.css";
const MoviePage = () => {
  

  return (
    <div className="divroot4">
    <nav class="navbar navbar-expand-lg  bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" href="#">Movies</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <div class="container">
  <div class="row">
  <div class="card" width = "18rem">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="row" >
    <div class="col"><a href="/Favourite">
    <img className="image" src="../images/images.png" alt="" />
  </a> </div>
  <div class="col"><a href="..">
  <img className="image" src="../images/download.png" alt="" />
</a> </div>
<div class="col"><a href="..">
<img className="image" src="../images/like-icon-vector-illustration.jpg" alt="" />
</a> </div>
  </div>
</div>
  </div>
  <div class="row" >
    <div class="col-sm"><div class="card" width = "18rem">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Comments</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
  </div>
    </div></div>
    <div class="col-sm"><div class="card" width = "18rem">
    <div class="card-body">
      <h5 class="card-title">Comments</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
  </div>
    </div></div>
    
  </div>
</div>
</div>


      </div>
  );
};

export default MoviePage;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/MoviePage.css";
import getmoviedetails from "../api/movieDetails";
const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  let favorites = []
  let like = []


  useEffect(() => {
    getmoviedetails(id).then((movie) => {
      setMovie(movie.data);
    });

    let fav = JSON.parse(localStorage.getItem("favorites"))
    if(fav){
      favorites = fav
      }
      console.log(favorites.some(item => item.id === parseInt(id)))
  }, [id]);

  const add_favorite = async () => {
    let fav = JSON.parse(localStorage.getItem("favorites"))
    if(fav){
      if(fav.some(item => item.id === id)){
      fav.push(movie)
      localStorage.setItem("favorites", JSON.stringify(fav))
      favorites = fav
      }
    }else{
     let fav1 = [movie]
     localStorage.setItem("favorites", JSON.stringify(fav1))
     favorites = fav1
    }
  }

  const add_like = async () => {
    let like = JSON.parse(localStorage.getItem("like"))
    if(like){
      if(like.some(item => item.id === id)){
        like.push(movie)
      localStorage.setItem("like", JSON.stringify(like))
      like = like
      }
    }else{
     let like1 = [movie]
     localStorage.setItem("like", JSON.stringify(like1))
     like = like1
    }
  }

  return (
    <div className="divroot4">
      <nav className="navbar navbar-expand-lg  bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="container">
        <div className="row">
        <div class="col">
          <div className="card3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{movie.original_title}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="row">
                <div className="col">
                  <div onClick={() => {add_like()}}>
                    <img className="image" src="../images/like.jpg" alt="" />
                  </div>{" "}
                </div>
                <div className="col">
                  <div onClick={() => {add_favorite()}}>
                    <img className="image" src="../images/love.jpg" alt="" />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col">
          <div class="container text-dark">
            <div class="row d-flex justify-content-center">
              <div class="col-md-11 col-lg-9 col-xl-7">
                <div class="card w-100 mt-1">
                  <div class="card-body p-4">
                    <div class="">
                      <h5>Johny Cash</h5>
                      <p class="small">3 hours ago</p>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus ras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis.
                      </p>

                      <div class="">
                        <Link  class="link-muted">
                           Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card w-100 mt-2">
                <div class="card-body p-4">
                  <div class="">
                    <h5>Johny Cash</h5>
                    <p class="small">3 hours ago</p>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus ras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis.
                    </p>

                    <div class="">
                      <Link  class="link-muted">
                         Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
     
        <div class="card">
              <div class="form-outline ">
                <textarea class="form-control" id="textAreaExample"></textarea>
              </div>
            <div class="float-end ">
              <button type="button" class="btn btn-primary ">Post comment</button>
              <button type="button" class="btn btn-outline-primary ">Cancel</button>
            </div>
          </div>
      
      </div>
    </div>
    </div>
  );
};

export default MoviePage;

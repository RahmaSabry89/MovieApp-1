import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/MoviePage.css";
import getmoviedetails from "../api/movieDetails";
const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  let favorites = [];
  let remove = [];
  let like = [];

  useEffect(() => {
    getmoviedetails(id).then((movie) => {
      setMovie(movie.data);
    });

    let fav = JSON.parse(localStorage.getItem("favorites"));
    if (fav) {
      favorites = fav;
    }
    console.log(favorites.some((item) => item.id === parseInt(id)));
  }, [id]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [
        ...comments,
        { user: "Johny Cash", time: "Now", text: newComment, replies: [] },
      ];
      setComments(updatedComments);
      setNewComment("");
      localStorage.setItem("comments", JSON.stringify(updatedComments));
    }
  };

  const handleReply = (commentIndex) => {
    const replyText = prompt("Enter your reply:");
    if (replyText !== null && replyText.trim() !== "") {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push({
        user: "John Doe",
        time: "Now",
        text: replyText,
      });
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
    }
  };
  const add_favorite = async () => {
    let fav = JSON.parse(localStorage.getItem("favorites"));
    if (fav) {
      if (fav.some((item) => item.id !== parseInt(id))) {
        fav.push(movie);
        localStorage.setItem("favorites", JSON.stringify(fav));
        favorites = fav;
      }
    } else {
      let fav1 = [movie];
      localStorage.setItem("favorites", JSON.stringify(fav1));
      favorites = fav1;
    }
  };

  const add_like = async () => {
    let like = JSON.parse(localStorage.getItem("like"));
    if (like) {
      if (like.some((item) => item.id !== parseInt(id))) {
        like.push(movie);
        localStorage.setItem("like", JSON.stringify(like));
        like = like;
      }
    } else {
      let like1 = [movie];
      localStorage.setItem("like", JSON.stringify(like1));
      like = like1;
    }
  };

  const remove_favorite = async () => {
    let remove = JSON.parse(localStorage.getItem("remove"));
    if (remove) {
      if (remove.some((item) => item.id !== parseInt(id))) {
        remove.pop(movie);
        localStorage.setItem("remove", JSON.stringify(remove));
        remove = remove;
      }
    } else {
      let remove1 = [movie];
      localStorage.setItem("remove", JSON.stringify(remove1));
      remove = remove1;
    }
  };

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
          <div className="col">
            <div className="card4">
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
                    <div
                      onClick={() => {
                        add_like();
                      }}
                    >
                      <img className="image" src="../images/like.jpg" alt="" />
                    </div>{" "}
                  </div>
                  <div className="col">
                    <div
                      onClick={() => {
                        add_favorite();
                      }}
                    >
                      <img className="image" src="../images/love.jpg" alt="" />
                    </div>{" "}
                  </div>
                  <div className="col">
                    <div
                      onClick={() => {
                        remove_favorite();
                      }}
                    >
                      <img
                        className="image"
                        src="../images/remove.png"
                        alt=""
                      />
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container text-dark">
              {comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="card w-100 mt-2">
                  <div className="card-body p-4">
                    <div>
                      <h5>{comment.user}</h5>
                      <p className="small">{comment.time}</p>
                      <p>{comment.text}</p>
                      {/* Display replies */}
                      {comment.replies.map((reply, replyIndex) => (
                        <div className="row">
                          <h6> Reply by </h6>
                          <div key={replyIndex}>
                            <h6>{reply.user}</h6>
                            <p className="small">{reply.time}</p>
                            <p>{reply.text}</p>
                          </div>
                        </div>
                      ))}
                      <div>
                        <Link
                          className="link-muted"
                          onClick={() => handleReply(commentIndex)}
                        >
                          Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cardC">
            <div className="form-outline ">
              <textarea
                className="form-control"
                id="textAreaExample"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            </div>
            <div className="float-end ">
              <button
                type="button"
                className="btn  "
                style={{ backgroundColor: "rgb(105, 46, 46)", color: "white" }}
                onClick={handlePostComment}
              >
                Post comment
              </button>
              <button type="button" className="btn  ">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

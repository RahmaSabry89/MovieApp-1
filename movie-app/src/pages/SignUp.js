import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };
  return (
    <div className="divroot1">
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
      <form className="form">
        <div className="mb-0">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-0">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col">
            <Link className="SignUp" onClick={handleRegister}>
              SignUp
            </Link>
          </div>
          <div className="col">
            <Link className="login" to="/Login">
              Already Have An Account ?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

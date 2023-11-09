import React from "react";
import {Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/SignUp.css";
const SignUp = () => {
  

  return (
    <div className="divroot1">
    <nav class="navbar navbar-expand-lg  bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" href="#">Movies</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <form className="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <Link class="SignUp" to="/Home">SignUp</Link>
  <Link class="login" to="/Login">Already Have An Account ?</Link>

</form>
      </div>

  );
};

export default SignUp;

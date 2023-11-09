import React ,{useState} from "react";
import {Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from '../firebase';

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Login.css";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="divroot2">
    <nav className="navbar navbar-expand-lg  bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">Movies</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <form className="form2">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" onChange={(e) => setEmail(e.target.value)} >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
  </div>
  <Link className="login2" to="/Home" onClick={handleLogin}>Login</Link>

</form>
      </div>

  );
};

export default Login;

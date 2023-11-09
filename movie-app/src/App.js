import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import MoviePage from "./pages/MoviePage";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="MoviePage/:id" element={<MoviePage />} />
        <Route path="Favourite" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

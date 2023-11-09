import axios from "axios";

const getmoviedetails = async (id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmUwNGQ0MDU0MGZkZjJjZGY1ODBkZDYyN2Q4ZmJmOSIsInN1YiI6IjY1NGE4MTkyNTMyYWNiMDBmZTM2MTljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mfQHWnGAhfOI0gvrcFTkbSK8-lOpCvMf2OXvvK_9tNk",
      },
    }
  );
};
export default getmoviedetails;

// A React hook/tool that tells a component to do something = UseEffect e.g fetch data in this case.
// A hook/storage box used to store information and updated when needed = UseState.
import React, { useEffect, useState } from "react";

// the function that will fetch the movies and display it.
function FetchMovie() {
  // movieList = an empty storage box where we are going to add the movies that we will retrive.
  //setMovieList = the tool that is going to grab the movies and add it into the movieList.
  const [movieList, setMovieList] = useState([]);

  // reminds React to fetch the movies when the component is shown.
  useEffect(() => {
    //This makes an HTTP GET request to The Movie Database API to fetch a list of "now playing movies".
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=1d1d8844ae1e746c459e7be85c15c840"
    )
      //converts the API response into JSON format in order for react to read it.
      .then((response) => response.json())
      // passes the results (array of movies) to setMovieList in order to update the component state or movieList
      .then((json) => setMovieList(json.results))
      // incase errors occur
      .catch((err) => console.log(err));
  }, []);

  // loop (map) inside the "movieList" array and display each "movie" e.g title
  return (
    <div>
      {movieList.map((movie) => (
        // <h1 style={{}} key={movie.id}>{movie.title}</h1>
        <img
          key={movie.id}
          style={{
            width: "300px",
            height: "280px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
}

// export the component so it can be used in other parts of the application
export default FetchMovie;

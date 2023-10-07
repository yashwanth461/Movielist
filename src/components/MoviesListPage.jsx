import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import axios from "axios";
import "../components/MoviesListPage.css";

function MoviesListPage() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://hoblist.com/api/movieList",
          {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const movie_data = response.data.result;
        setMoviesData(movie_data);
        setIsLoading(false);
        console.log(movie_data);
      } catch (error) {
        setIsLoading(false);
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);

    const day = date.getDate();
    const month = date.toLocaleString("en-IN", { month: "short" });

    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedDay} ${month}`;
  }

  // const handleUpVote = (id) => {
  //   const updatedMoviesData = moviesData.map((movie) => {
  //     if (movie._id === id) {
  //       movie.totalVoted++;
  //     }
  //     return movie;
  //   });
  //   setMoviesData(updatedMoviesData);
  // };

  // const handleDownVote = (id) => {
  //   const updatedMoviesData = moviesData.map((movie) => {
  //     if (movie._id === id && movie.totalVoted > 0) {
  //       movie.totalVoted--;
  //     }
  //     return movie;
  //   });
  //   setMoviesData(updatedMoviesData);
  // };

  return (
    <div className="h-full">
      <NavBar />
      <div className="movies-list-container">
        <div className="movies-list">
          {isLoading ? (
            <p className="text-2xl text-white">Loading....</p>
          ) : (
            moviesData.map((movie) => (
              <div key={movie.id} className="movie-card">
                <div className="flex justify-center items-center">
                  <div className="movie-vote">
                    <BiSolidUpArrow
                      size={40}
                      color="gray"
                      //onClick={() => handleUpVote(movie._id)}
                      className="cursor-pointer"
                    />
                    <p className="vote-count">{movie.totalVoted}</p>
                    <BiSolidDownArrow
                      size={40}
                      color="gray"
                      //onClick={() => handleDownVote(movie._id)}
                      className="cursor-pointer"
                    />
                    <p className="vote-label">Votes</p>
                  </div>
                  <div className="movie-image">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="movie-poster"
                    />
                  </div>
                  <div className="movie-details">
                    <p className="movie-title">{movie.title}</p>
                    <p className="movie-genre">Genre: {movie.genre}</p>
                    <p className="movie-director">Director: {movie.director}</p>
                    <p className="movie-stars">Starring: {movie.stars}</p>
                    <div className="movie-meta">
                      <p>{movie.runTime} Mins</p>
                      <p>{movie.language}</p>
                      <p>{formatDate(movie.releasedDate)}</p>
                    </div>
                    <div className="movie-stats">
                      <p className="movie-views">views: {movie.pageViews}</p>
                      <p>Voted by {movie.totalVoted} people</p>
                    </div>
                  </div>
                </div>
                <div className="movie-actions">
                  <button className="watch-trailer-button">
                    Watch Trailer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviesListPage;

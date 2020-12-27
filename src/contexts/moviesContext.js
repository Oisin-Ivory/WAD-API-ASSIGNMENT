import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import React, { useContext,useEffect, createContext, useReducer, useState } from "react";
import { getMovies, getUpComingMovies,getTopRatedMovies,getFavourites } from "../api/movies-api";


export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        favoriteMovies:[...state.favoriteMovies],
        };
    case "add-watchlater":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlater: true } : m
        ),
        movies: [...state.movies],
        toprated: [...state.toprated],
        favoriteMovies:[...state.favoriteMovies],
      };
    case "add-watchlater-topratedmovies":
      return {
        toprated: state.toprated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlater: true } : m
         ),
        movies: [...state.movies],
        upcoming: [...state.upcoming],
        favoriteMovies:[...state.favoriteMovies],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], toprated:[...state.toprated], favoriteMovies:[...state.favoriteMovies] };
    case "load-upcoming":
      return { upcoming: action.payload.upcoming, movies: [...state.movies], toprated:[...state.toprated], favoriteMovies:[...state.favoriteMovies] };
    case "load-toprated":
      return { toprated: action.payload.toprated, movies: [...state.movies], upcoming:[...state.upcoming], favoriteMovies:[...state.favoriteMovies] };
    case "load-favoriteMovies":
      console.log(action.payload.favoriteMovies)
      return { favoriteMovies: action.payload.favoriteMovies, movies: [...state.movies], toprated:[...state.toprated], upcoming:[...state.upcoming] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        favoriteMovies:[...state.favoriteMovies],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],toprated: [],favoriteMovies:[]});
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchLater = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlater", payload: { movie: state.upcoming[index] } });
  };

  const AddToWatchLaterTopRatedMovies = (movieId) => {
    const index = state.toprated.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlater-topratedmovies", payload: { movie: state.toprated[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpComingMovies().then((upcoming) => {
      dispatch({ type: "load-upcoming", payload: { upcoming } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((toprated) => {
      dispatch({ type: "load-toprated", payload: { toprated } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getFavouriteMovies = async (username) => {
      getFavourites(username).then((favoriteMovies) => {
      dispatch({ type: "load-favoriteMovies", payload: { favoriteMovies } });
      console.log(favoriteMovies);
    });
  }

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        toprated: state.toprated,
        favoriteMovies:state.favoriteMovies,
        addToFavorites: addToFavorites,
        addToWatchLater: addToWatchLater,
        AddToWatchLaterTopRatedMovies: AddToWatchLaterTopRatedMovies,
        addReview: addReview,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
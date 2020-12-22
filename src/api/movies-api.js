export const getMovies = () => {
  return fetch(
    '/api/movies',{headers:{
      'Autherization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getUpComingMovies = () => {
  return fetch(
    '/api/movies/upcoming',{headers:{
      'Autherization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
  
  export const getMovie = id => {
    return fetch(
      '/api/movies/'+id,{headers:{
        'Autherization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      '/api/genres',{headers:{
        'Autherization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getRecommendations = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json())
    .then(json => json.results);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTopRatedMovies = () => {
    return fetch(
      '/api/movies/toprated',{headers:{
        'Autherization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getCredits = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.cast);
  };

  export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};
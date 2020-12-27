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
      '/api/movies/'+id+'/recommended',{headers:{
        'Autherization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovieReviews = id => {
    return fetch(
      '/api/movies/'+id+'/reviews',{headers:{
        'Autherization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTopRatedMovies = () => {
    return fetch(
      '/api/movies/toprated',{headers:{
        'Autherization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
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

export const getFavourites = username => {
  return fetch(
    '/api/users/'+username+'/favourites',{headers:{
      'Autherization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const postFavourite = (username,id) => {
  return fetch('/api/users/'+username+'/favourites', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({'id': id})
}).then(res => res.json())
};
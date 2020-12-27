import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import {AuthContext} from '../contexts/authContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react'
import {Link } from "react-router-dom";

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);
  const movies = context.movies;

  if (authContext.isAuthenticated === true) {
    return (
      <PageTemplate
        title="No. Movies"
        movies={movies}  /* Changed */
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} />;
        }}
      />
    );
  }else{
    return(
      <div style={{paddingTop:125}}>
       <Segment inverted placeholder>
        <Header icon>
          <Icon name='user' />
          You must Log in or Sign In to see Movies.
        </Header>
        <Segment.Inline>
        <div class="ui buttons"><Link to="/login"><Button inverted color='blue'>Login</Button></Link><div style={{paddingLeft:12,paddingRight:12}}></div><Link to="/signup"><Button inverted color='green'>SignUp</Button></Link></div>

        </Segment.Inline>
      </Segment>
  </div>
    );
  }

};

export default MovieListPage;
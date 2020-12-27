import React, {useState,useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {
  Button,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react'
import {Link } from "react-router-dom";
import {AuthContext} from '../contexts/authContext'


const FavoriteMoviesPage = props => {
  const [favorites, setFavorites] = useState([]);
  const authContext = useContext(AuthContext);
 
  if (authContext.isAuthenticated === true) {

    var movies = async() => {
      let result = await authContext.getFavouriteMovies(authContext.userName);
      return result;
    }

    movies().then(responce => setFavorites(responce))

  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
}else{
  return(
    <div style={{paddingTop:125}}>
     <Segment inverted placeholder>
      <Header icon>
        <Icon name='user' />
        You must Log in or Sign In to see Favourites.
      </Header>
      <Segment.Inline>
      <div class="ui buttons"><Link to="/login"><Button inverted color='blue'>Login</Button></Link><div style={{paddingLeft:12,paddingRight:12}}></div><Link to="/signup"><Button inverted color='green'>SignUp</Button></Link></div>

      </Segment.Inline>
    </Segment>
</div>
  );
}

};

export default FavoriteMoviesPage;
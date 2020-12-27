import React,{useContext} from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import {Button, Container,Divider, Header,Icon,Segment } from 'semantic-ui-react'
import {AuthContext} from '../contexts/authContext'

const MoviePage = props => {
  const authContext = useContext(AuthContext);
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  
  if (authContext.isAuthenticated === true) {
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <Container textAlign="center">
          <Divider horizontal><span><h2>Reviews</h2></span></Divider>
            {!props.history.location.pathname.endsWith("/reviews") ? (
              
              <Link
                to={`/movies/${id}/reviews`}
              >
              <Button inverted color='olive'>
              Show Reviews (Extracts)
              </Button>
              </Link>
              
            ) : (
              <Link
                to={`/movies/${id}`}
              >
              <Button inverted color='olive'>
                Hide Reviews 
              </Button>
              </Link>
            )}
          </Container>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  )}else{
    return(
      <div style={{paddingTop:125}}>
       <Segment inverted placeholder>
        <Header icon>
          <Icon name='user' />
          You must Log in or Sign In to see Movies Details.
        </Header>
        <Segment.Inline>
        <div class="ui buttons"><Link to="/login"><Button inverted color='blue'>Login</Button></Link><div style={{paddingLeft:12,paddingRight:12}}></div><Link to="/signup"><Button inverted color='green'>SignUp</Button></Link></div>
  
        </Segment.Inline>
      </Segment>
  </div>
    );


  };
};
export default withRouter(MoviePage);
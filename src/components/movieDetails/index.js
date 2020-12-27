import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import { getRecommendations } from "../../api/movies-api";
import Movie from "../recommendedCard/";


import {Card,Flag,Container,Segment,Grid,Divider,Header,Icon} from 'semantic-ui-react'

export default ({ movie}) => {
  const [recommendeds, setRecommended] = useState([]);


  useEffect(() => {
    getRecommendations(movie.id).then(recommendeds => {
      setRecommended(recommendeds);
    });
  }, []);


  function sleep(ms){
    while(ms < 100){
      ms++;
    }
    reloadMovieCards();
  }
  const movieCards = recommendeds.map(m => (
    <Movie key={m.id} movie={m}/>
  ));

  function reloadMovieCards(){
    getRecommendations(movie.id).then(recommendeds => {
      setRecommended(recommendeds);
    });
  }

  return (
    
    <>
      
    <Segment id="movieDetails">

      <Container>
      <Header as='h2'><span>Overview</span></Header>
      <p>{movie.overview}</p>
      </Container>
    </Segment>
    <Divider horizontal><span><h2>Similar Movies</h2></span></Divider>
    {<Card.Group onClick={sleep(100)}>{movieCards}</Card.Group>}

    </>
  )};



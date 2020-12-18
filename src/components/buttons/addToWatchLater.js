import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {Button } from 'semantic-ui-react'

const AddToWatchLater = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchLater = e => {
    e.preventDefault();
    context.addToWatchLater(movie.id);
  };
  return (
    <Button
    inverted color='violet'
      onClick={handleAddToWatchLater}
    >
      Add to Watch Later
    </Button>
  );
};

export default AddToWatchLater;
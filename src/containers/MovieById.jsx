import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import MovieDetail from '../components/detail/MovieDetail';
import { findMovieById } from '../services/studioGhibli';


const MovieById = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    findMovieById(match.params.id)
      .then(movie => {
        setMovie(movie);
        setLoading(false);
      });
  }, []);

  if(loading) return <Loading />;
  return (
    <MovieDetail {...movie} />);
};

MovieById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default MovieById;

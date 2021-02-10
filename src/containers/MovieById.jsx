import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import MovieDetail from '../components/detail/MovieDetail';
import { useMovieById } from '../hooks/movies';

const MovieById = ({ match }) => {
  const { loading, movie } = useMovieById(match.params.id);

  if(loading) return <Loading />;
  return <MovieDetail {...movie} />;
};

MovieById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default MovieById;

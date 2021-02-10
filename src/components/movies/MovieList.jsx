import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  const movieElements = movies.map(movie => (
    <li key={movie.id}>
      <Movie description={movie.description} title={movie.title} />
    </li>
  ));

  return (
    <ul data-testid="movies">
      {movieElements}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default MovieList;

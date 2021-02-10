import React from 'react';
import Loading from '../components/loading/Loading';
import MovieList from '../components/movies/MovieList';
import { useMovies } from '../hooks/movies';

const MoviesPage = () => {
  const { loading, movies } = useMovies();

  if(loading) return <Loading />;

  return <MovieList movies={movies} />;
};

export default MoviesPage;

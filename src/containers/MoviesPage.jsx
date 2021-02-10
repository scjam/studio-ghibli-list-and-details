/* eslint-disable max-len */
import React, { Component, useState, useEffect } from 'react';
import Loading from '../components/loading/Loading';
import MovieList from '../components/movies/MovieList';
import { findMovies } from '../services/studioGhibli';

const MoviesPage = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    findMovies()
      .then(movies => {
        setMovies(movies);
        setLoading(false);
      });
  }, []);

  if(loading) return <Loading />;

  return <MovieList movies={movies} />;
};

export default MoviesPage;

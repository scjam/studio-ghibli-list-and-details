import { useState, useEffect } from 'react';
import { findMovieById, findMovies } from '../services/studioGhibli';

export const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    findMovies()
      .then(movies => {
        setMovies(movies);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    movies
  };
};

export const useMovieById = id => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    findMovieById(id)
      .then(movie => {
        setMovie(movie);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    movie
  };
};

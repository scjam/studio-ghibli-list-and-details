/* eslint-disable max-len */
import React, { Component } from 'react';
import MovieList from '../components/movies/MovieList';
import { findMovies } from '../services/studioGhibli';

export default class MoviesPage extends Component {
  state = {
    loading: true,
    movies: []
  }

  componentDidMount() {
    findMovies()
      .then(movies => {
        this.setState({ movies, loading: false });
      });
  }
  
  render() {
    const { loading, movies } = this.state;
    
    if(loading) return <img src="https://media.giphy.com/media/omHPYZttAVAAw/giphy.gif" alt="loading" />;
    return (
      <MovieList movies={movies} />
    );
  }
}

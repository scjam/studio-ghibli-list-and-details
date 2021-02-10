import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import MovieDetail from '../components/detail/MovieDetail';
import { findMovieById } from '../services/studioGhibli';

export default class MovieById extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    loading: true,
    movie: null
  }

  componentDidMount() {
    findMovieById(this.props.match.params.id)
      .then(movie => {
        this.setState({ movie, loading: false });
      });
  }

  render() {
    const { loading, movie } = this.state;

    if(loading) return <Loading />;
    return (
      <MovieDetail {...movie} />
    );
  }
}

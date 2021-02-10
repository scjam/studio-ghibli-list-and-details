import React from 'react';
import PropTypes from 'prop-types';

const MovieDetail = ({ title, description, director, release_date }) => (
  <div>
    <img src="https://i.ebayimg.com/images/g/dCoAAOSwUq9bQP~h/s-l300.jpg" alt="Susuwatari" />
    <h3>{title}</h3>
    <p>{description}</p>
    <p>{director}</p>
    <p>{release_date}</p>
  </div>
);

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired
};

export default MovieDetail;

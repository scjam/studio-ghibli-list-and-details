/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ description, title }) => (
  <div>
    <img src="https://i.pinimg.com/474x/cc/1a/59/cc1a597f9ac0945b23b998711cc4f3d4.jpg" alt="studio ghibli" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

Movie.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Movie;


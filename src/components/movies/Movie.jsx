/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ description, title }) => (
  <div>
    <img src="https://pbs.twimg.com/profile_images/378800000756791312/1488c4b418e118f758c5c015c9f21ebf.png" alt="studio ghibli" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

Movie.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Movie;


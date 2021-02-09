/* eslint-disable max-len */
import React, { Component } from 'react';

export default class MoviesPage extends Component {
  state = {
    loading: true
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) return <img src="https://media.giphy.com/media/omHPYZttAVAAw/giphy.gif" alt="loading" />;
    return (
      <h1>Movies Page</h1>
    );
  }
}

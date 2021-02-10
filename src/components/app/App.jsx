import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MovieById from '../../containers/MovieById';
import MoviesPage from '../../containers/MoviesPage';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesPage} />
        <Route path="/movies/:id" component={MovieById} />
      </Switch>
    </Router>
  );
}

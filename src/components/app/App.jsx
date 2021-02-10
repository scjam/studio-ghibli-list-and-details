import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MovieById from '../../containers/MovieById';
import MoviesPage from '../../containers/MoviesPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MoviesPage} />
        <Route path="/movies/:id" component={MovieById} />
      </Switch>
    </Router>
  );
}

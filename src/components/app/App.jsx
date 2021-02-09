import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MoviesPage from '../../containers/MoviesPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MoviesPage} />
      </Switch>
    </Router>
  );
}

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MoviesPage from './MoviesPage';

describe('MoviesPage container', () => {
  it('fetches and displays a list of movies ', async() => {
    render(<MoviesPage />);

    screen.getByAltText('loading');

    const listOfMovies = await screen.findByTestId('movies');

    return waitFor(() => {
      expect(listOfMovies).not.toBeEmptyDOMElement();
    });
  });
});

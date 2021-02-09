import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import MoviesPage from './MoviesPage';

describe('MoviesPage container', () => {
  it('fetches and displays a list of movies ', () => {
    render(<MoviesPage />);

    screen.getByAltText('loading');
  });
});

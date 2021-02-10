import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import moviesApiResponse from '../fixtures/movies.json';
import MoviesPage from './MoviesPage';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(ctx.json(moviesApiResponse));
  })
);

describe('MoviesPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays a list of movies ', async() => {
    render(
      <MemoryRouter>
        <MoviesPage />
      </MemoryRouter>
    );

    screen.getByAltText('loading');

    const listOfMovies = await screen.findByTestId('movies');

    return waitFor(() => {
      expect(listOfMovies).not.toBeEmptyDOMElement();
    });
  });
});

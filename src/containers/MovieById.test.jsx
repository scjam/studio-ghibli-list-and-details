/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import movieByIdResponse from '../fixtures/characterById.json';
import MovieById from './MovieById';


const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49', (req, res, ctx) => {
    return res(ctx.json(movieByIdResponse));
  })
);

describe('MovieById container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays a movie details', async() => {
    render(
      <MovieById match={{ 
        params: { id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49' } 
      }} 
      />);

    screen.getByAltText('loading');

    return waitFor(() => {
      screen.getByText('My Neighbor Totoro');
      screen.getByText('Hayao Miyazaki');
    });
  });
});

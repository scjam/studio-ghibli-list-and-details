export const findMovies = () => {
  return fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then((results) => results.map(result => ({
      id: result.id,
      title: result.title,
      description: result.description
    })));
};

export const findMovieById = id => {
  return fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(res => res.json())
    .then(json => ({
      id: json.id,
      title: json.title,
      description: json.description,
      director: json.director,
      release_date: json.release_daate
    }));
};

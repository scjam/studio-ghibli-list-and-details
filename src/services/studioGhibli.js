export const findMovies = () => {
  return fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then((results) => results.map(result => ({
      id: result.id,
      title: result.title,
      description: result.description
    })));
};

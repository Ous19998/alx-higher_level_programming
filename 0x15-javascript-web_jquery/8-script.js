<<<<<<< HEAD
$.get('https://swapi.co/api/films/?format=json', function (data) {
  $('UL#list_movies').append(...data.results.map(movie => `<li>${movie.title}</li>`));
=======
// Queries an API and fetches all movie titles then inserts them
// into the UL#list_movies tag

let url = 'https://swapi.co/api/films/?format=json';
$.get(url, function (data) {
  let films = data.results;
  for (let film of films) {
    $('ul#list_movies').append(`<li>${film.title}</li>`);
  }
>>>>>>> 1947cec5a2d33956fd95b6d4672fff317a65ad65
});

<<<<<<< HEAD
$.get('https://swapi.co/api/people/5/?format=json', function (data) {
  $('DIV#character').text(data.name);
=======
// Fetches and replaces the name of the API data then replaces the name
// of the character in the DIV#character tag text

let url = 'https://swapi.co/api/people/5/?format=json';
$.get(url, function (data, stat) {
  $('div#character').text(data.name);
>>>>>>> 1947cec5a2d33956fd95b6d4672fff317a65ad65
});

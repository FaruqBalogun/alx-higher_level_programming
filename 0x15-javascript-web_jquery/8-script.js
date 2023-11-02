$(document).ready(function () {
  // Make an AJAX GET request to the URL
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
    // Get the movies from the response data
    const movies = data.results;

    // Select the ul element with the id 'list_movies'
    const listMovies = $('#list_movies');

    // Iterate through the movies and create list items for each
    $.each(movies, function (index, movie) {
      const movieTitle = movie.title;
      const listItem = $('<li>').text(movieTitle);
      listMovies.append(listItem);
    });
  });
});

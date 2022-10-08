const express = require('express');
const path = require('path');
const {
  getMovies,
  postMovie,
  patchMovie,
  deleteMovie
} = require('./controller');

// CONSTANTS
const app = express();
const PORT = 3000;
const CLIENT = path.join(__dirname, '..', 'client/dist');

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(CLIENT));

// ROUTES
app.get('/movies', getMovies);
app.get('/movie/post', postMovie);
app.get('/movie/update', patchMovie);
app.get('/movie/delete', deleteMovie);

// EVENTS
app.listen(PORT, 'Hosting at http://localhost:' + PORT);
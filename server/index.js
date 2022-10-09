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
app.post('/movie/post', postMovie);
app.patch('/movie/update', patchMovie);
app.delete('/movie/delete', deleteMovie);

// EVENTS
app.listen(PORT, () => `Hosting at http://localhost:${PORT}`);

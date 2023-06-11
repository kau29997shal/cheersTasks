const { addMovies, fetchAllMovies } = require('../controller/moviesController');

const movieRoutes = require('express').Router();

movieRoutes.post('/add', addMovies);
movieRoutes.get('/fetch', fetchAllMovies);

module.exports = movieRoutes;
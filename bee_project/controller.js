const Movie = require('../models/movieModel');

const movieController = {
  getAllMovies: (req, res) => {
    const movies = Movie.getAll();
    res.status(200).json(movies);
  },

  getMovieById: (req, res) => {
    const movieId = parseInt(req.params.movieId, 10);
    const movie = Movie.getById(movieId);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  },

  createMovie: (req, res) => {
    const newMovie = req.body;
    const createdMovie = Movie.create(newMovie);
    res.status(201).json(createdMovie);
  },

  updateMovie: (req, res) => {
    const movieId = parseInt(req.params.movieId, 10);
    const updatedMovie = req.body;
    const movie = Movie.update(movieId, updatedMovie);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  },

  deleteMovie: (req, res) => {
    const movieId = parseInt(req.params.movieId, 10);
    const updatedMovies = Movie.delete(movieId);
    res.status(204).json(updatedMovies);
  },
};

module.exports = movieController;

const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

// Movie CRUD routes
router.get('/movies', movieController.getAllMovies);
router.get('/movies/:movieId', movieController.getMovieById);
router.post('/movies', movieController.createMovie);
router.put('/movies/:movieId', movieController.updateMovie);
router.delete('/movies/:movieId', movieController.deleteMovie);

module.exports = router;

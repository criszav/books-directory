const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');


// Get all books
router.route('/').get(bookController.getAllBooks);

// Get an specific book by ID
router.route('/:id').get(bookController.getOneBook);

// Create a new book
router.route('/').post(bookController.createBook);

// Update a book
router.route('/:id').put(bookController.updateBook);

// Delete a book
router.route('/:id').delete(bookController.deleteBook);

module.exports = router;
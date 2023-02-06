const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const { validateBook } = require('../middleware');


// Get all books
router.route('/').get(bookController.getAllBooks);

// Get an specific book by ID
router.route('/:id').get(bookController.getOneBook);

// Create a new book
router.route('/').post(validateBook, bookController.createBook);

// Update a book
router.route('/:id').put(validateBook, bookController.updateBook);

// Delete a book
router.route('/:id').delete(bookController.deleteBook);

module.exports = router;
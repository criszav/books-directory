const Book = require('../models/bookModel');


// Get all the books from DB
const getAllBooks = async (req, res) => {
    const books = await Book.find({}); // Find all books from the DB
    res.send(books);
}

// Get an specific book by ID
const getOneBook = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.send(book);
}

// Create a new book
const createBook = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.send('Book created: ' + book);
}

// Update a book
const updateBook = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, { ...req.body });
    await book.save();
    res.send('Book updated: ' + book);
}

// Delete a book
const deleteBook = async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.send(`Book deleted`);
}

module.exports = { getAllBooks, getOneBook, createBook, updateBook, deleteBook };
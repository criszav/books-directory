const mongoose = require('mongoose');
const Book = require('../models/bookModel');
const { books } = require('./books');


// Creating and connecting to DB
mongoose.connect('mongodb://localhost:27017/books-directory');


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database connected");
})



const seedDB = async () => {
    await Book.deleteMany({}); // Deleting all books before seeding the DB

    for (let i = 0; i < books.length; i++) {

        // Creatin a new book with the seed.js books info
        const book = new Book({
            name: books[i].name,
            author: books[i].author,
            year: books[i].year,
            genre: books[i].genre,
        })
        await book.save(); // Saving the book to the DB
    }
}


seedDB()
    .then(() => {
        mongoose.connection.close();
        console.log("Dabatase disconnected")
    })
    .catch((e) => {
        console.log(e);
    });
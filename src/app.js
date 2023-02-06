if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bookRoutes = require('./routes/bookRoutes');
const ExpressError = require('./utils/ExpressError');

// Creating and connecting to DB
mongoose.connect('mongodb://localhost:27017/books-directory');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database connected");
})

// app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// Routes
app.use('/books', bookRoutes);


// Unrecognise URL handler
app.all('*', (req, res, next) => {
    next(new ExpressError('Page not found', 404));
})


// Error handler
app.use((err, req, res, next) => {
    const { status = 500, message } = err;
    if (!message) message = 'Something went wrong';
    res.status(status).send(message);
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})
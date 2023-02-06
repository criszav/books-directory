const bookSchema = require('./schemas');
const ExpressError = require('./utils/ExpressError');


const validateBook = (req, res, next) => {
    const { error } = bookSchema.bookSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(element => element.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

module.exports = { validateBook };
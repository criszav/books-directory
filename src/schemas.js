const Joi = require('joi');

module.exports.bookSchema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string().required(),
    year: Joi.number().integer().min(1).required(),
    genre: Joi.string().required()
})
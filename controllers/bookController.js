const _ = require('lodash');
const bookModel = require('../models/book')
const data = require('../data/books')

// Display list of all books
exports.list_books = async (req, res) => {
    const books = await bookModel.find({});
    try {
        res.send(books);
      } catch (error) {
        response.status(500).send(error);
      }
};

// create a books: demonstrates destructuring
/*
exports.create_book = function(req, res) {
    const { title, author } = req.body
    res.json({
        title, 
        author
    });
};
*/
exports.create_book = async (req, res) => {
    const book = new bookModel(req.body);
  
    try {
      await book.save();
      res.send(book);
    } catch(error) {
      response.status(500).send(error);
    }
};

// retrieve a book by ID
exports.retrieve_book = function(req, res){
    let bookId = req.params.bookId
    res.json(_.find(data.books, { id: bookId }))
}
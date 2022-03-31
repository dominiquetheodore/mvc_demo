const _ = require('lodash');
const bookModel = require('../models/book')
const data = require('../data/books')

// Display list of all books
exports.list_books = async (req, res) => {
    console.log('listing')
    const books = await bookModel.find({});
    try {
        res.send(books);
      } catch (error) {
        res.status(500).send(error);
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
      res.status(500).send(error);
    }
};

// retrieve a book by ID
exports.retrieve_book = async (req, res) => {
  try {
      const bookId = req.params.bookId
      console.log(bookId)
      const book = await bookModel.find({ _id: bookId });  
      res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};
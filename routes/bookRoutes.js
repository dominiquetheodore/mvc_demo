var express = require('express')
var bookController = require('../controllers/bookController')
var router = express.Router()
 
// list all books
router.get('/', bookController.list_books)

// create a book (dummy)
router.post('/', bookController.create_book)

// retrieve a book by ID
router.get('/:bookId', bookController.retrieve_book)

// a GET route
router.get('/about', function(req, res){
    res.send("A sample GET route")
})

module.exports = router
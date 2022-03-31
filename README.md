# MVC demo
This repo demonstrates how to structure your code in accordance with MVC.

## Installation
1. Clone this repo to your local machine
2. Run ``npm install`` in the root directory
3. Create a .env file with your MongoDB atlas credentials. You can copy the included .env.example and fill in your details.
4. Run ``node index.js`` to start the server

## Endpoints
This application has 3 endpoints.
- GET /books : returns a list of books in the database
- POST /books: add a book
- GET /books/id: retrieve a book by ID
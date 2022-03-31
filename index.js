const express = require('express')
const mongoose = require('mongoose')
const booksRoutes = require('./routes/bookRoutes')

require('dotenv').config()

const app = express()
 
const port = 3000

app.use(express.json())

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster =  process.env.CLUSTER;
const dbname = process.env.DB_NAME;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get('/', (req, res) => {
    res.send('Welcome to ALU library!')
})

app.use('/books', booksRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const booksRoutes = require('./routes/bookRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('dotenv').config()

const app = express()
 
const port = 3000

// JSON body parser 
app.use(express.json())
// morgan HTTP logger
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Welcome to ALU library!')
})

app.use('/books', booksRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

// test MongoDB connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
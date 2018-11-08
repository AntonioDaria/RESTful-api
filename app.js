var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json())

Genre =require('./models/genre');
Book =require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//route to home page
app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});


//route to api/genres
app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

//route to api/addGenre
app.post('/api/genres', (req, res) => {
  var genre = req.body;
	Genre.addGenres(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

//route to api/updateGenre
app.put('/api/genres/:_id', (req, res) => {
  var id = req.params._id;
  var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

//route to get api/books
app.get('/api/books/', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//route to api/booksById
app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//route to api/addBook
app.post('/api/books', (req, res) => {
  var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log('Running on port 3000...');

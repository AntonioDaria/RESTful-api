var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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

//route to api/books
app.get('/api/books/', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log('Running on port 3000...');

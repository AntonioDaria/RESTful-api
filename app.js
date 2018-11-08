var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre =require('./models/genre');

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

app.listen(3000);
console.log('Running on port 3000...');

var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

//this objects can be globally accessed
var Genre = module.exports = mongoose.model('Genre', genreSchema);


// Get Genres
module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
}

// Get Genres
module.exports.addGenres = (genre, callback) => {
	Genre.create(genre, callback);
}

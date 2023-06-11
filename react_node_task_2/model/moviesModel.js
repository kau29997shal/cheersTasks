const mongoose = require('mongoose');

const movieSchema = {
    movieName : {
        type : String,
        require : true
    },
    movieRating : {
        type : Number,
        require : true
    },
    movieReleaseDate : {
        type : Date,
        require : true
    }
}

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
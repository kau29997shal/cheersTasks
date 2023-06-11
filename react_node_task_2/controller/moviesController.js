const express = require('express');
const Movie = require('../model/moviesModel');

const addMovies = async (req, res) => {
    const movie = new Movie(req.body)
    const newMovie = await movie.save();
    if(newMovie){
        res.send({
            error : false,
            data : movie
        })
    }else{
        res.send({
            error : true,
            message : 'something went wrong'
        })
    }
}

const fetchAllMovies = async (req, res) => {
    const movies = await Movie.find();
    if(movies != null){
        res.send({
            error : false,
            message : 'Movies fetched successfully',
            movies : movies
        })
    }else{
        res.send({
            error : true,
            message : "something went wrong"
        })
    }
}

module.exports = {
    addMovies,
    fetchAllMovies
}
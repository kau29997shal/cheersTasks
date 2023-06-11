const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');

// to initiate express application
const app = express();
// use for cors policy error
app.use(cors());

// db connection
const dbURL = "mongodb://127.0.0.1:27017/cheers";
mongoose.connect(dbURL, {});

const dbConnect = mongoose.connection;
// check db connection
dbConnect.on('error', () => {
    console.log('dbConnect', 'database connection error');
})

dbConnect.once('open', () => {
    console.log('dbConnect', 'Database connected successfully');
})

// to get req variables
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});


// get route
app.get('/', (req,res) => {
    res.send('hellow world');
})

app.use('/movies', urlencodedParser, movieRoutes)

// to start server
app.listen(5000, (err) => {
    if(err) console.log(err);
    console.log('server is connected on port 5000');
})
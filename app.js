require("dotenv").config();
const express = require('express'); //import express
const mongoose = require('mongoose'); //import mongoose
const campRoutes = require('./routes/camp_spots'); //import feed route
const app = express(); // create express app

// middleware
// also using nodemon, but that is wrapping the build process for npm start
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet =require('helmet');

app.use(express.json()); // to parse incoming JSON
app.use(bodyParser.json()); // Body-parsing Middleware
app.use(morgan('dev'));// Logging Middleware
app.use(helmet());

app.use('/camping', campRoutes)

//setup database connection using mongoose
mongoose.connect(process.env.MONGO_DB_CONNECTION_URL).then(result => {
    app.listen(3000);
    console.log('Success');
}).catch(err => console.log('err', err));

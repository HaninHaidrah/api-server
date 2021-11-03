'use strict';

// basic requirments:
const express = require('express');
require('dotenv').config();

const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middlewares/logger');
const employeeRoute=require('./routes/movie.route');
const movieRoute = require('./routes/employee.route');
const PORT = process.env.PORT || 8000;

// global middleware
app.use(logger);
app.use(express.json());


app.use(employeeRoute); // use the employess routes
app.use(movieRoute)

//global middleware we should add them after the routes
app.use('*', notFoundHandler);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}


module.exports = {
 app,start
}
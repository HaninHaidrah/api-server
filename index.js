'use strict';


// require the start function to start the server
const { start } = require('./src/server');
const { db } = require('./src/models/index');

// wrapped the start function , so the database will run first and then the server.

db.sync().then(() => {
  start()
}).catch(console.error);
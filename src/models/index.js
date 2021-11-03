'use strict';

// the configration;

// require .env to read env variabls 
require('dotenv').config();


// require some important stuff from squelize library {sequelize,DataType}

const {Sequelize,DataTypes}=require('sequelize');

// declare the variable for our database the postgres_Url to get the database from memory or locally:

const postgres_URL=process.env.NODE_ENV==='test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// declare a variable to get dataBase for deployment using env variables production:
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};

// create instance to connect our server with postgress using  env virables:

let sequelize= new Sequelize(postgres_URL,sequelizeOptions);


// require the models so we can pass the DataType and sequilze library to use its methods in the model file for it.
const employee =require('./employee.model');
const movie =require('./movies.model');

const employeeModel = employee(sequelize,DataTypes);
const movieModel = movie(sequelize,DataTypes);

// export the models after they have been added to them and the connection between ourDB and postgres to be run before start the server.

const Collection = require('./collection.class');

const movieCollection = new Collection(movieModel);
const employessCollection = new Collection(employeeModel);

module.exports = {  
  db:sequelize,
  movieCollection :movieCollection,
  employessCollection:employessCollection

}
    // sequelize,employee(sequelize,DataTypes)





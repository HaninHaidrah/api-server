'use strict';

// require express so we can use its method route to add routes to server;
const express=require('express');
const movieRoute=express.Router();


// require the model from index not from employee.model as we pass some params from index ;
 const{movieCollection }=require('../models/index');


 // create the routes as usal:
 movieRoute.post('/movie',addInfo);
 movieRoute.get('/movie',getAllInfo);
 movieRoute.put('/movie/:id',updatedInfo);
 movieRoute.delete('/movie/:id',deletedInfo)


 // functions for req and res

 async function addInfo(req, res) {
    const obj = req.body;
    let person = await movieCollection.create(obj);
    res.status(201).json(person);
  
  }

 async function getAllInfo(req, res) {

    const info = await movieCollection.read()
    res.status(200).json(info);
  
  }
  

  
  async function updatedInfo(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    const updatedData = await movieCollection.update(obj,id);
    res.status(201).json(updatedData);
  }

  
  async function deletedInfo(req, res) {
    const id = parseInt(req.params.id);
    const deletedData = await movieCollection.delete(id)
    res.status(204).json(deletedData);
  }

  module.exports=movieRoute
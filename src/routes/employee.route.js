'use strict';

// require express so we can use its method route to add routes to server;
const express=require('express');
const employeeRoute=express.Router();


// require the model from index not from employee.model as we pass some params from index ;
 const{employessCollection }=require('../models/index');


 // create the routes as usal:
 employeeRoute.post('/employee',addInfo);
 employeeRoute.get('/employee',getAllInfo);
 employeeRoute.get('/employee/:id',getSpacficOne);
 employeeRoute.put('/employee/:id',updatedInfo);
 employeeRoute.delete('/employee/:id',deletedInfo)


 // functions for req and res

 async function addInfo(req, res) {
    const obj = req.body;
    let person = await employessCollection.create(obj);
    res.status(201).json(person);
  
  }

 async function getAllInfo(req, res) {

    const info = await employessCollection.read()
    res.status(200).json(info);
  
  }
  
  async function getSpacficOne(req, res) {
    const id = parseInt(req.params.id); 
    const person = await employessCollection.update(id)
    res.status(200).json(person);
  }
  

  
  async function updatedInfo(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    const updatedData = await employessCollection.update(obj,id);
    res.status(201).json(updatedData);
  }

  
  async function deletedInfo(req, res) {
    const id = parseInt(req.params.id);
    const deletedData = await employessCollection.delete(id)
    res.status(204).json(deletedData);
  }

  module.exports=employeeRoute
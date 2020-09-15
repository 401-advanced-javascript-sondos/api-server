'use strict';

const express=require('express');
const products=require('../models/products/products.collection');
const Router =express.Router();

Router.post('/products' , postproducts);
Router.get('/products' , getproducts);
Router.get('/products/:id' , getproductsId);
Router.delete('/products/:id' , deleteproducts);
Router.put('/products/:id' , updateproducts);
Router.patch('/products/:id' , updateproducts);



function postproducts(req,res,next){
  let recored=req.body;
  products.create(recored).then(result=>{
    res.status(200).json(result);
  }).catch(next);

}


function getproducts(req,res,next){
  products.get().then(result=>{
    console.log(result);
    res.status(200).json({
      count: result.length,
      resutl: result,
    });
  }).catch(err=>{
    console.log(err);
    next(err);
  });
}

function getproductsId(req,res,next){
  let id=req.params.id;
  products.get(id).then(result=>{
    res.status(200).json(result);
  }).catch(err=>{
    console.log(err);
    next(err);
  });
}

function deleteproducts(req,res,next){
  let id=req.params.id;
  products.delete(id).then(result=>{
    res.status(200).json(result);
  }).catch(err=>{
    console.log(err);
    next(err);
  }); 
}
 
function updateproducts(req,res,next){
  let id=req.params.id;
  let record=req.body;
  products.update(id,record).then(result=>{
    res.status(200).json(result);
  }).catch(err=>{
    console.log(err);
    next(err);
  });
}

module.exports =Router;
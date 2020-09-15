'use strict';


const express=require('express');
const catRouter =express.Router();
const categories=require('../models/categories/categories.collection');


catRouter.post('/categories' , postCategories);
catRouter.get('/categories' , getCategories);
catRouter.get('/categories/:id' , getCategoriesId);
catRouter.delete('/categories/:id' , deleteCategories);
catRouter.put('/categories/:id' , updateCategories);
catRouter.patch('/categories/:id' , updateCategories);



function postCategories(req,res,next){
  let recored=req.body;
  categories.create(recored).then(result=>{
    res.status(200).json(result);
  }).catch(err=>{
    console.log(err);
    next(err);
  });
}


function getCategories(req,res,next){
  categories.get().then(result=>{
    res.status(200).json(result);
  });
}

function getCategoriesId(req,res,next){
  let id=req.params.id;
  categories.get(id).then(result=>{
    res.status(200).json({count:result.length ,result:result});
  }).catch(err=>{
    console.log(err);
    next(err);
  });
}

function deleteCategories(req,res,next){
  let id=req.params.id;
  categories.delete(id).then(result=>{
    res.status(200).json(result);
  }).catch(err=>{
    console.log(err);
    next(err);
  }); 
}
 
function updateCategories(req,res,next){
  let id=req.params.id;
  let record=req.body;
  categories.update(id,record).then(result=>{
    res.status(200).json(result);
  }).catch(err=>{
    console.log(err);
    next(err);
  });
}

module.exports =catRouter;

'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories/categories.collection');
const products = require('../models/products/products.collection');

router.get('/api/v1/:model', getAllmethod);
router.get('/api/v1/:model/:id', getByIdmethod);
router.post('/api/v1/:model', postAllmethod);
router.put('/api/v1/:model/:id', updatemethod);
router.delete('/api/v1/:model/:id', deletemethod);


router.param('model', getmodel);


function getmodel(req, res, next) {

  let model = req.params.model;

  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    break;
  case 'products':
    req.model = products;
    next();
    break;
  default:
    next('Invalid Model!!! ');
    break;
  }

}

function getAllmethod(req, res, next) {
  console.log('model',req.model);
  req.model.get().then(record => {
    res.status(200).json({count: record.length,resutl: record});
  }).catch(next);
}

function postAllmethod(req,res,next){
  let recored=req.body;
  req.model.create(recored).then(result=>{
    res.status(200).json(result);
  }).catch(next);    
}


function updatemethod(req,res,next){
  let id=req.params.id;
  let record=req.body;
  req.model.update(id,record).then(result=>{
    // console.log('update',result);
    res.status(200).json(result);
  }).catch(next);
}


function getByIdmethod(req,res,next){
  let id=req.params.id;
  req.model.get(id).then(result=>{
    res.status(200).json(result);
  }).catch(next);
}
  
function deletemethod(req,res,next){
  let id=req.params.id;
  console.log('id delete',id);
  req.model.delete(id).then(result=>{
    console.log('delete',result);
    res.status(200).json(result);
  }).catch(next);
}
   


module.exports=router;
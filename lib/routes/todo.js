'use strict';


const express = require('express');
const todoRouter = express.Router();
const todo = require('../models/todo/todo.collection');


todoRouter.post('/todo', postCategories);
todoRouter.get('/todo', getCategories);
todoRouter.get('/todo/:id', getCategoriesId);
todoRouter.delete('/todo/:id', deleteCategories);
todoRouter.put('/todo/:id', updateCategories);
todoRouter.patch('/todo/:id', updateCategories);



function postCategories(req, res, next) {
    let recored = req.body;
    todo.create(recored).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        next(err);
    });
}




function getCategories(req, res, next) {
    todo.get()
        .then(record => {
            res.status(200).json({
                count: record.length,
                resutl: record,
            });
        }).catch(next);

}

function getCategoriesId(req, res, next) {
    let id = req.params.id;
    todo.get(id).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        next(err);
    });
}

function deleteCategories(req, res, next) {
    let id = req.params.id;
    todo.delete(id).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        next(err);
    });
}

function updateCategories(req, res, next) {
    let id = req.params.id;
    let record = req.body;
    todo.update(id, record).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        next(err);
    });
}

module.exports = todoRouter;
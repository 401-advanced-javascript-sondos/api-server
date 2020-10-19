'use strict';

const schema =require('./todo.schema');
const Model=require('../mongoModel');


class Todo extends Model{
  constructor(){
    super(schema);
  }
}

module.exports=new Todo();
'use strict';

const schema =require('./products.schema');
const Model=require('../mongoModel');


class Products extends Model{
  constructor(){
    super(schema);
  }
}

module.exports=new Products();
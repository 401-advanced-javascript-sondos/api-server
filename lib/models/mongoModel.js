'use strict';

class Model{

  constructor(schema){
    this.schema=schema;
  }

  //CRUD


  create(record){

    let newrecord= new this.schema(record);
    return newrecord.save();
  }


  grt(_id){
    // if(_id){
    //   return  this.schema.findById(_id)
    // }else{
    //   return  this.schema.find();
    // }

    let obj = _id ? { _id } : {};
    return this.schema.find(obj);
  }

  update(_id,record){
    return this.schema.findByIdAndUpdate(_id,record);
  }

  delete(_id){
    return this.schema.findByIdAndDelte(_id);
  }

}


module.exports=Model;
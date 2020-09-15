'use strict';


//req.method will give use the method use;
//req.path will give us the path for route
module.exports = (req, res, next) => {
  console.log(`REQUEST---> The method is ${req.method} & path: ${req.path}`);
  next();
};
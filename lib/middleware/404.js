'use strict';

function notfound(req,res,next){
  res.status(404).send('Page Not Found');
}

module.exports=notfound;
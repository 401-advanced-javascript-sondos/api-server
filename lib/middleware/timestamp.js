'use strict';

function timestamp(err,req,res,next){
    let date =new Date();
    let dateTime=date.toLocaleDateString();
    req.requestTime(dateTime);
    next();
};

module.exports=timestamp;
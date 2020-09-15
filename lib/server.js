'use strict';
// console.log('you are here');
const express = require('express');
const app = express();
require('dotenv').config();
const cors=require('cors');
const morgan = require('morgan');


//--------Middlewere---------
app.use(express.json());
app.use(cors);
app.use(morgan('dev'));
// app.use(timestamp);


const productsRoute = require('./routes/product');
const categoriesRoute=require('./routes/categories');
const handdelError=require('./middleware/500');
const notfound= require('./middleware/404');
// const timestamp=require('./middleware/timestamp');
// const logger=require('./middleware/logger');






//--------Home---------
app.get('/', (req, res) => {
  console.log('home');
  res.send('Welcome to ou Home');
  // next(err);
});



//--------categories---------
app.use(categoriesRoute);
//=============================


//--------products---------
app.use(productsRoute);
//=============================



//--------error 500---------
app.get('/error', (req, res) => {
  throw new Error('bad Request .... ');
});
//=============================



//--------middleware---------
app.use('*',notfound);
app.use(handdelError);

//=============================



module.exports = {
  server: app,
  start: port => {
    let PORT =  port || process.env.PORT ||3000;
    app.listen(PORT, () => console.log(`listen to port : ${PORT}`));
  },
};
//=============================

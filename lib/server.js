'use strict';
// console.log('you are here');
const express = require('express');
require('dotenv').config();
// const cors=require('cors');
const morgan = require('morgan');
const productsRoute = require('./routes/product');
const categoriesRoute=require('./routes/categories');
const handdelError=require('./middleware/500');
const notfound= require('./middleware/404');
const timestamp=require('./middleware/timestamp');
const logger=require('./middleware/logger');

//--------Middlewere---------
const app = express();
app.use(express.json());
// app.use(cors);
app.use(logger);
app.use(timestamp);








//--------Home---------
app.get('/', (req, res) => {
  console.log('home');
  res.send('Welcome to ou Home');
  // next(err);
});



//--------categories---------
app.use('/',categoriesRoute);
//=============================


//--------products---------
app.use('/',productsRoute);
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
// const PORT= process.env.PORT;
// app.listen(PORT, () => console.log(`listen to port : ${PORT}`));

module.exports = {
  server: app,
  start: port => {
    let PORT =  port || process.env.PORT ||3000;
    app.listen(PORT, () => console.log(`listen to port : ${PORT}`));
  },
};
//=============================

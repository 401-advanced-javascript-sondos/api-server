'use strict';

require('dotenv').config();

// const monogoose=require('monogoose')
const serverModul=require('./lib/server.js');

// const monogoose_url=process.env.URL;

// const options={
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
// };

// monogoose.connect(monogoose_url,options);

//run my application
serverModul.start();
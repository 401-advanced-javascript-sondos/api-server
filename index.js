'use strict';

require('dotenv').config();

const mongoose=require('mongoose');
const serverModul=require('./lib/server.js');

const mongoose_url=process.env.url;

const options={
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(mongoose_url,options);
serverModul.start();


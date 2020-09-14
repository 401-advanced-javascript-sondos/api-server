'use strict';

require('dotenv').config();
//Import start and server from server 
const serverModul=require('./lib/server.js');

//run my application
serverModul.start();
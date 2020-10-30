'use strict';

const { Double } = require('bson');
const mongoose = require('mongoose');
const Products = mongoose.Schema({
  category: { type: String, require: true },
  name: { type: String, require: true },
  display_name: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  count: { type: Number },
  inStock: { type: Number, require: true },

});

module.exports = mongoose.model('Products', Products);

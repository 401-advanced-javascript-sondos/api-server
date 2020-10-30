'use strict';

const mongoose = require('mongoose');
const Products = mongoose.Schema({
  category: { type: String, require: true },
  name: { type: String, require: true },
  display_name: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  count: { type: Number,  default: 0 },
  inStock: { type: Number,   default: 0 },

});

module.exports = mongoose.model('Products', Products);

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ProductSchema = new Schema({
    
    productId: {
      type: String,
      required: true,
      unique:true
    },
    category: {
        type: String,
        required: true
      },
    productName: {
    type: String,
    required: true
    },
    productModel: {
        type: String,
        required: true
      },
    price: {
    type: Number,
    required: true
    },
    availableQuantity: {
        type: Number,
        required: true
      }
    }, 
    {
      writeConcern: {
        j: true,
        wtimeout: 1000
    }
    }
  );

module.exports = mongoose.model('Products', ProductSchema);
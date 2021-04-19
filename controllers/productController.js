'use strict';
var mongoose = require('mongoose'),
Product = mongoose.model('Products');

exports.list_all_products = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.create_a_product = function(req, res) {
  var newProduct = new Product(req.body);
  newProduct.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.show_a_product = function(req, res) {
  Product.find({productId:req.params.productId}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update_a_product = function(req, res) {
  Product.findOneAndUpdate({productId: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete_a_product = function(req, res) {
  Product.deleteMany({  productId: req.params.productId},function(err, product) {

    if (err)
      res.send(err);
    res.json({ message: 'Product deleted successfully' });

  });
};
'use strict';
var mongoose = require('mongoose'),
CartItem = mongoose.model('Cart');
const Products = mongoose.model('Products');


exports.list_all_items = function(req, res) {
    CartItem.find({username:req.params.username}, function(err, product) {

      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
 exports.add_an_item = function(req, res) {
    var cartItemnew = new CartItem(req.body);
    const { username, productId, productName,quantity,amount} = req.body;
    
    let item2 = Products.findOne({productId: productId}, function(err, result) {
      if (result==null) {
        res.json({ message: "Given product ID doesn't exist" }); //checking if given product exists
      }
      else{
        cartItemnew.save({username:req.params.username},function(err, cartItem) {
          if (err)
            res.send(err);
          res.json(cartItem);
        });
      }
    });
  };
  
  exports.update_cart_item = function(req, res) {
    const { username, productId, productName,quantity,amount} = req.body;

    let item2 = Products.findOne({productId: productId}, function(err, result) {
      if (result==null) {
        res.json({ message: "Given product ID doesn't exist" });  //checking if given product exists
      }
      else{
    CartItem.findOneAndUpdate({username:req.params.username}, req.body, {new: true}, 
      function(err, product) {
      
        if (err)
        res.send(err);
        res.json(product);
    });
  }
});
  };
  

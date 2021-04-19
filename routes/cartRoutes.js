'use strict';


module.exports = function(app) {

var cart =require('../controllers/cartController')

app.route('/rest/v1/users/:username/cart')
.get(cart.list_all_items)
.post(cart.add_an_item)
.put(cart.update_cart_item);



};
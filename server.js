var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  User = require('./models/userModel'), 
  CartItem = require('./models/cartModel'), 
  ProductItem = require('./models/ProductModel'),
  bodyParser = require('body-parser');
  
//MongoDB Atlas connection url
//Put your url here
const url = 'mongodb+srv://cartapi:api123@cluster0.taov3.mongodb.net/productDatabase?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
var cartRoutes = require('./routes/cartRoutes'); 
var userRoutes = require('./routes/userRoutes'); 
var productRoutes = require('./routes/productRoutes');
//connection with express
cartRoutes(app);
userRoutes(app); 
productRoutes(app);

app.listen(port);

console.log('User Cart API server running on port : ' + port);
console.log('Follow link: http://localhost:'+port)
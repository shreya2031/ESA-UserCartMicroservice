var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  User = require('./models/userModel'), 
  Cart = require('./models/cartModel'), 
  Product = require('./models/ProductModel'),
  bodyParser = require('body-parser');
  require("dotenv").config();
  
//MongoDB Atlas connection uri
const uri = process.env.mongo_URI;

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false});

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
console.log('\n')
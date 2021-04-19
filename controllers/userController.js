'use strict';
var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var newuser = new User(req.body);
  newuser.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.show_a_user = function(req, res) {
  User.find({username:req.params.username}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
User.deleteMany({username: req.params.username}, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

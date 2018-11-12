var mongoose = require('mongoose'),
    User = require('../models/UserSchema.js'),
    Event = require('../models/EventSchema.js'),
    bcrypt = require('bcryptjs'),
    config = require('../config/config.js');




mongoose.connect(config.db.uri, {useMongoClient:true});

exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

exports.create = function(req, res) {
  var user = new User(req.body);

  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(user.passWord, salt, (err, hash) => {
      if(err) throw err;
      user.passWord = hash;
      user.save(function(err) {
          if(err) {
            console.log(err);
            res.status(400).send(err);
          } else {
            res.json(user);
          }
      });
    });
  });
};
exports.show = function(req, res){
  res.json(req.user);
};

exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}


exports.delete = function(req, res) {
  var user = req.user;
  user.remove(function(err){
    if(err){
      console.log(err);
    } else {
      res.json(user);
    }
  });
};

exports.update = function(req, res) {
  var user = req.user;
  Object.assign(user, req.body);
  user.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  });
};

exports.userList = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      users.sort(function(a, b) {
        if (a.code < b.code) return -1;
        if (a.code > b.code) return 1;
      });
      res.json(users);
    }
  });
};

exports.myEvents = function (req, res){
  var user = req.user;
  Event.find({users: user._id}, function (err, events){
    if(err){
      console.log(err);
    } else {
      res.json(events);
    }
  });
}



/*
  Middleware: find a listing by its ID, then pass it to the next request handler.

  Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */
exports.userByID = function(req, res, next, id) {
  User.findById(id).exec(function(err, user) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.user = user;
      next();
    }
  });
};

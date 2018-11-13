var mongoose = require('mongoose'),
    Event = require('../models/EventSchema.js'),
    User = require('../models/UserSchema.js'),
    config = require('../config/config.js');

    mongoose.connect(config.db.uri, {useMongoClient:true});

exports.create = function(req, res) {
  var newEvent = new Event(req.body);
    newEvent.save(function(err, event) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(event);
      }
  });
};


exports.delete = function(req, res) {
  var event = req.event;
  var user = req.user;
  if(event.host == user.username){
    event.remove(function(err){
      if(err){
        console.log(err);
      } else {
        res.json(event);
      }
    });
  } else {
    res.status(401);
  }
};

exports.update = function(req, res) {
  var event = req.event;
  var user = req.user;
  if(event.host == user.username){
    Object.assign(event, req.body);
    event.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(event);
      }
    });
  }
};

exports.show = function(req, res) {
  // Replace host username with username and name
  User.findOne({username: req.event.host}, function(err, user) {
    if (err) {
      res.status(404).send(err);
    } else {
      var event = Object.assign({}, req.event._doc);
      event.host = {
        username: req.event.host,
        first_name: user.first_name,
        last_name: user.last_name
      };
      res.json(event);
    }
  });
};

exports.eventList = function(req, res) {
  Event.find({}, function(err, events) {
    if (err) {
      res.send(err);
    } else {
      events.sort(function(a, b) {
        if (a.code < b.code) return -1;
        if (a.code > b.code) return 1;
      });
      res.json(events);
    }
  });
};

exports.addUser = function (req, res) {
  var event = req.event;
  var user = req.user;
  Object.assign(event, req.body);

  event.users.push(user.username);
  console.log(user.username);

  Event.findByIdAndUpdate(event._id, event, function(err, event){
    if (err){
      console.log(err);
    } else {
      res.json(event);
    }
  });
};

exports.unRegister = function(req, res) {
  var event = req.event; 
  var user = req.user;
  Event.findByIdAndUpdate(event._id, 
    {$pull: {users: user.username}},
    {safe: true, upsert: true},
    function(err, doc) {
      if(err){
      console.log(err);
      }else{
      res.json(doc);
      }
  });
};



/*
  Middleware: find a event by its ID, then pass it to the next request handler.

  Find the event using a mongoose query,
        bind it to the request object as the property 'event',
        then finally call next
 */
exports.eventByID = function(req, res, next, id) {
  Event.findById(id).exec(function(err, event) {
    if(err) {
      res.status(404).send(err);
    } else {
      req.event = event;
      next();
    }
  });
};

exports.userByID = function(req, res, next, id) {
  User.findById(id).exec(function(err, user) {
    if(err) {
      res.status(404).send(err);
    } else {
      req.user = user;
      next();
    }
  });
};

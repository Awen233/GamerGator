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
  event.remove(function(err){
    if(err){
      console.log(err);
    } else {
      res.json(event);
    }
  });
};

exports.update = function(req, res) {
  var event = req.event;
  Object.assign(event, req.body);
  event.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(event);
    }
  });
};

exports.show = function(req, res){
      console.log(req.event);
      res.json(req.event);
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



/*
  Middleware: find a event by its ID, then pass it to the next request handler.

  Find the event using a mongoose query,
        bind it to the request object as the property 'event',
        then finally call next
 */
exports.eventByID = function(req, res, next, id) {
  Event.findById(id).exec(function(err, event) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.event = event;
      next();
    }
  });
};

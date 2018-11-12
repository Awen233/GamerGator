var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    eventsRouter = require('../routes/events.server.routes.js'),
    usersRouter = require('../routes/users.server.routes.js');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, {useMongoClient:true});

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
  app.use(express.static('client'));

  // Access control compliancy
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /**TODO 
  Use the events router for requests to the api */
  app.use("/api/events", eventsRouter); // eventsRouter is currently pointing to '/api/events'
  app.use("/api/users", usersRouter);

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.get("/", function(req, res){
    res.render("index");
  });

 // LOGIN

 


  return app;
};  
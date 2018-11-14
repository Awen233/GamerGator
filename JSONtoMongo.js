
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    User = require('./server/models/UserSchema.js'),
    Event = require('./server/models/EventSchema.js'),
    eventsData,
    usersData, 
    config = require('./server/config/config.js');


/* Connect to your database */
mongoose.connect(config.db.uri, {useMongoClient:true});


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

Event.remove({}, function(err){
  if (err){
    console.log(err);
  } else {
     console.log("Removed Events!");
     fs.readFile('./events.json', function read(err, data){
      if (err){
        console.log(err);
      }
      eventsData = JSON.parse(data);
      eventsData.entries.forEach(function (event){

        var thisEvent =  Event(event);
        thisEvent.save(function(err){
          if (err) {
            console.log(err);
          } else {
            console.log('Event created!');
          }
        }); 
       });
    });
  }
});



User.remove({}, function (err){
  if (err){
    console.log(err);
  } else {
     console.log("Removed Users!");
     fs.readFile('./users.json', function read(err, data){
      if (err){
        console.log(err);
      }
      usersData = JSON.parse(data);
      usersData.entries.forEach(function (user){

        var thisUser =  User(user);
        thisUser.save(function(err){
          if (err) {
            console.log(err);
          } else {
            console.log('User created!');
          }
        }); 
       });
    });
  }
});


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
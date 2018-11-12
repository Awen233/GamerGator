
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

User.find({},function(err, listOfUsers){  
    if (err){
        console.log(err);
    } else {
        Event.findById('5be1da486e90a424c5e9276e', function(err, event){
            if(err){
                console.log(err);
            } else{
                listOfUsers.forEach(function(user){
                    event.users.push(user);
                });
            }
            Event.findByIdAndUpdate('5be1da486e90a424c5e9276e', event, function(err, event){
                if(err){
                    console.log(err);
                } else {
                    console.log("updated event!");
                }
            });
        });

    }
});

// Event.findById('5be1d693d4345d2479780a5a').populate("User").exec(function(err, event){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(event);
//     }
// });



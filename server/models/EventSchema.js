var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
  event_name: {
    type: String,
    required : true,
  },
  host: {
    type: String,
    ref: "User.username",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
  },
  users: [
      {
        type: String,
        ref: "User.username"
      }
  ],
  age: {
    type: Number
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String
  }
});



module.exports = mongoose.model('event', eventSchema);
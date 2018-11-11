var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
  event_name: {
    type: String,
    required : true,
  },
  host: {
    type: String,
  },
  address: {
    type: Number,
    required: true,
  },
  categories: {
    type: [String],
  },
  users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
  ],
  age: {
    type: Number
  },
  date: {
    type: Date,
    required: true
  }

});



module.exports = mongoose.model('event', eventSchema);

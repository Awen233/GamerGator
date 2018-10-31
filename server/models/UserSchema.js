var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  user_Id: {
    type: String,
    required : true,
  },
  passWord: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  first_name: {
    type: String,
  },

  last_name: {
    type: String,
  },

  age: {
    type: Number,
    required: true,
  },

  interests: {
    type: [],
  }, 

  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event"
    }
  ]

});



module.exports = mongoose.model('user', userSchema);

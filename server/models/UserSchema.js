var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs');

var userSchema = new Schema({
  user_Id: {
    type: String,
    required : true,
  },
  password: {
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
  }
});



module.exports = mongoose.model('User', userSchema);

// module.exports.getUserById = function(id, callback){
//   User.findById(id, callback);
// }
//
// module.exports.getUserByEmail = function(email, callback){
//   const query = {email: email};
//   User.findOne(query, callback);
// }
// 
// module.exports.addUser = function(newUser, callback){
//   bcrypt.genSalt(10, function(err, salt){
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if(err) throw err;
//       newUser.password = hash;
//       newUser.save(callback);
//     });
//   });
// }
//
// module.exports.comparePassword = function(candidatePassword, hash, callback){
//   bcrypt.compare((candidatePassword, hash, (err, isMatch) => {
//     if(err) throw err;
//     callback(null, isMatch);
//   }));
// }

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../controllers/Users_Controller.js');
const user = require('../models/UserSchema.js');
const config = require('../config/config.js');

router.route('/re')
  .get(function(req, res){
    res.send("simple test");
  });

router.post('/register', (req, res, next) => {
  var newUser = new user(req.body);
  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg: 'fail'});
    } else {
      res.json({success: true, msg: 'success'});
    }
  });
});

router.post('/authentication', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) return err;
      if(isMatch){
        const token = jwt.sign({user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.first_name,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'wrong password'});
      }
    });
  });
});

router.get('/profile', passport.authenticate('jwt', {session: false}) ,(req, res,next) => {
  res.send('hello from profile');
});

module.exports = router;

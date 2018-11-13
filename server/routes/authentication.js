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
      res.status(400).json({success: false, msg: 'That username is taken.'});
    } else {
      res.json({success: true, msg: 'success'});
    }
  });
});

router.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.status(401).json({success: false, msg: 'Invalid username or password.'});
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
            username: user.username
          }
        });
      } else {
        return res.status(401).json({success: false, msg: 'Invalid username or password.'});
      }
    });
  });
});

router.get('/profile', passport.authenticate('jwt', {session: false}) ,(req, res,next) => {
  res.send('hello from profile');
});

module.exports = router;

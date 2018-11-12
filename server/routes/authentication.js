const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const user = require('../controllers/Users_controller.js');

router.route('/re')
  .get(function(req, res){
    res.send("simple test");
  });

router.post('/register', user.create);

module.exports = router;

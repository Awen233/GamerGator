/* Dependencies */
var users = require('../controllers/Users_Controller.js'),
    express = require('express'),
    router = express.Router(),
    passport = require('passport');
/*
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */

router.route('/')
  .get(users.userList);

router.route('/myevents')
  .get(passport.authenticate('jwt', {session: false}) ,users.myEvents);

module.exports = router;

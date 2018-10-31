/* Dependencies */
var users = require('../controllers/Users_Controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */

router.route('/')
  .post(users.create)
  .get(users.userList);

router.route('/:userId')
  .get(users.show)
  .delete(users.delete)
  .put(users.update);



/*
  The 'router.param' method allows us to specify middleware we would like to use to handle 
  requests with a parameter.

  Say we make an example request to '/users/566372f4d11de3498e2941c9'

  The request handler will first find the specific user using this 'usersById' 
  middleware function by doing a lookup to ID '566372f4d11de3498e2941c9' in the Mongo database, 
  and bind this user to the request object.

  It will then pass control to the routing function specified above, where it will either 
  get, update, or delete that specific user (depending on the HTTP verb specified)
 */

 router.param('userId', users.userByID);

module.exports = router;
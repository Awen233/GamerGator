/* Dependencies */
var events = require('../controllers/Events_controller.js'), 
    express = require('express'), 
    router = express.Router(),
    passport = require('passport');

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  .get(events.eventList)
  .post(passport.authenticate('jwt', {session: false}), events.create);

router.route('/:eventId')
  .get(events.show) 
  .delete(passport.authenticate('jwt', {session: false}), events.delete)
  .put(passport.authenticate('jwt', {session: false}), events.update);

router.route('/:eventId/register') 
  .put(passport.authenticate('jwt', {session: false}), events.addUser);

router.route('/:eventId/unregister') 
  .put(passport.authenticate('jwt', {session: false}), events.unRegister);


/*
  The 'router.param' method allows us to specify middleware we would like to use to handle 
  requests with a parameter.

  Say we make an example request to '/events/566372f4d11de3498e2941c9'

  The request handler will first find the specific event using this 'eventsById' 
  middleware function by doing a lookup to ID '566372f4d11de3498e2941c9' in the Mongo database, 
  and bind this event to the request object.

  It will then pass control to the routing function specified above, where it will either 
  get, update, or delete that specific event (depending on the HTTP verb specified)
 */
router.param('eventId', events.eventByID);

module.exports = router;
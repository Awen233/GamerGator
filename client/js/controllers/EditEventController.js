angular.module('EditEvent').controller('EditEventController', ['$scope', 'EditEventFactory', 'SharedService', '$window', 
    function ($scope, factory, shared, $window) {
    	shared.setAuthHeader();
      $scope.model = {
        event: {
          host: shared.getUser().username,
          users: [
            shared.getUser().username
          ]
        },
        loggedIn: shared.isLoggedIn(),
        categories: factory.categories
      };
   $scope.createEvent = function() {
      var categories = []; // Iron the search categories dictionary out into a nice array
        for (category in $scope.model.event.categories) {
          if ($scope.model.event.categories[category]) {
            categories.push(category);
          }
        }
      var event = Object.assign({}, $scope.model.event);
      event.categories = categories;
      factory.api.create(event).then(function() {
        console.log('Successfully created event: ', event);
        $window.location.href = 'myevents.html';
      }, function(err) {
        console.log(err);
      });
  }; 

    	$scope.logOut = function() {
	      shared.logOut();
	    };
}]);


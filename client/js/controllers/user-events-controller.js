angular.module('userevents').controller('UserEventsController', ['$scope', 'UserEvents', 
  function($scope, UserEvents) {
    $scope.model = {
      user_id: '',
      events: []
    };
    // Do initial loading of information
    $scope.load = function() {
      UserEvents.api.getMy($scope.model.user_id).then(function(res) {
        $scope.model.events = res.data;
      }, function(error) {
        console.log('Unable to retrieve my events:', error);
      });
    }
    $scope.load();
    // Route to single event page on click
    $scope.eventWasClicked = function(id) {
      console.log('Event clicked with id: ' + id);
    };
  }
]);
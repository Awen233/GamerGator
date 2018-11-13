angular.module('MyEvents').controller('MyEventsController', ['$scope', 'MyEventsFactory', 'SharedService', 
  function($scope, factory, shared) {
    shared.setAuthHeader();
    $scope.model = {
      user_id: '',
      events: []
    };

    // Do initial loading of information
    $scope.load = function() {
      factory.api.getMyEvents().then(function(res) {
        $scope.model.events = res.data;
      }, function(error) {
        console.log('Unable to retrieve my events:', error);
      });
    }
    $scope.load();
    // Route to single event page on click
    $scope.eventWasClicked = function(id) {
      shared.showEvent(id);
    };
  }
]);
angular.module('events').controller('HomeEventsController', ['$scope', 'Events', 
  function($scope, Events) {
    
    $scope.load = function() {
      Events.get($scope.searchParams).then(function(response) {
        $scope.events = response.events;
      }, function(error) {
        console.log('Unable to retrieve listings:', error);
      });
    }
    $scope.load();

    $scope.eventWasClicked = function(index) {
      console.log('Event clicked at index: ' + index);
    };
  }
]);
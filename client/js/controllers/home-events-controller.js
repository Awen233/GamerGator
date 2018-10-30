angular.module('events').controller('HomeEventsController', ['$scope', 'Events', 
  function($scope, Events) {
    $scope.fieldFilters = [
    {
      type: 'text',
      model: 'title',
      placeholder: 'Event Title'
    },
    {
      type: 'text',
      model: 'type',
      placeholder: 'Event Type'
    },
    {
      type: 'text',
      model: 'host',
      placeholder: 'Event Host'
    },
    {
      type: 'date',
      model: 'date',
      placeholder: 'Event Date'
    }
    ]
    $scope.eventCategories = [
    'Console', 'PC', 'Mobile', 'Board game', 'Card game', 'Arcade',
    'Roleplaying', 'Fighter', 'Racing', 'Real-time strategy', 
    'Turn-based strategy', 'Shooter', 'Survival', 'Sports'
    ]
    $scope.searchParams = {};
    $scope.$watch('searchParams', function(newValue, oldValue, scope) {
      console.log(newValue);
    }, true);

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
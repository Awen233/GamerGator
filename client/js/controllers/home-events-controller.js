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
    ];
    $scope.eventCategories = [
      'Console', 'PC', 'Mobile', 'Board game', 'Card game', 'Arcade',
      'Roleplaying', 'Fighter', 'Racing', 'Real-time strategy', 
      'Turn-based strategy', 'Shooter', 'Survival', 'Sports'
    ];
    $scope.searchParams = {};
    $scope.shownEvents = [];
    // This is the only place where shown events should be set
    $scope.$watchGroup(['searchParams', 'allEvents'], function(newValue, oldValue, scope) {
      // Filter all events using search params
      // Sort the events by most recent first
      $scope.shownEvents = $scope.allEvents;
    }, true);

    $scope.load = function() {
      Events.getAll().then(function(res) {
        $scope.allEvents = res.events;
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
angular.module('EditEvent').factory('EditEventFactory', ['$http', 
  function($http) {
  	const apiBase = 'http://localhost:8080/api';
      const api = {
          create: function(event) {
              return $http.post(apiBase + '/events', event);
          }
      };
      const categories = [
        'Console', 'PC', 'Mobile', 'Board game', 'Card game', 'Arcade',
        'Roleplaying', 'Fighter', 'Racing', 'Real-time strategy', 
        'Turn-based strategy', 'Shooter', 'Survival', 'Sports'
      ];
      return {
          api: api,
          categories: categories
      };
}]);
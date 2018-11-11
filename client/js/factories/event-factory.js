angular.module('events', []).factory('Events', function($http) {
  const apiBase = 'http://localhost:8080/api';
  const api = {
    getAll: function() {
        return $http.get(apiBase + '/events');
    },
  };
  const searchFields = {
    filters: [
      {
        type: 'text',
        model: 'title',
        label: 'Title'
      },
      {
        type: 'text',
        model: 'host',
        label: 'Host'
      },
      {
        type: 'number',
        model: 'age',
        label: 'Maximum age',
        min: 1,
      },
    ],
    categories: [
      'Console', 'PC', 'Mobile', 'Board game', 'Card game', 'Arcade',
      'Roleplaying', 'Fighter', 'Racing', 'Real-time strategy', 
      'Turn-based strategy', 'Shooter', 'Survival', 'Sports'
    ],
  };
  return {
    api: api,
    searchFields: searchFields
  };
});
angular.module('events', []).factory('Events', function($http) {
  const apiBase = 'http://localhost:8080/api';
  const api = {
    getAll: function() {
        return $http.get(apiBase + '/events');
    },
    getMy: function() {

    },
    create: function(params) {
	   return $http.post('http://localhost:8080/api/listings', listing);
    }, 
    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
       return $http.delete('http://localhost:8080/api/listings/' + id);
    }
  };
  const searchFields = {
    filters: [
      {
        type: 'text',
        model: 'title',
        placeholder: 'Event title'
      },
      {
        type: 'text',
        model: 'host',
        placeholder: 'Event host'
      },
      {
        type: 'number',
        model: 'age',
        placeholder: 'Maximum age',
        min: 14,
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
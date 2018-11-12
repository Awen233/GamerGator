/* register the modules the application depends upon here*/
angular.module('events', ['ngCookies']);
angular.module('userevents', ['ngCookies']);

/* register the application and inject all the necessary dependencies */
var app = angular.module('EventsApp', ['events', 'userevents']);
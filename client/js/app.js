/* register the modules the application depends upon here*/
angular.module('HomeEvents', ['ngCookies']);
angular.module('MyEvents', ['ngCookies']);

/* register the application and inject all the necessary dependencies */
var app = angular.module('EventsApp', ['HomeEvents', 'MyEvents']);
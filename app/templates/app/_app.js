(function(){
	'use strict';

	angular.module('<%= _.slugify(appname) %>', [ 'ngRoute','<%= _.slugify(appname) %>-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();
(function () {
"use strict";

angular
.module('Main')
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){
    $routeProvider.
      when('/', {
        templateUrl : './tabs/home.html',
        controller : 'homeController',
        controllerAs : 'vm'
      }).
      when('/about', {
        templateUrl : './tabs/about.html',
        controller : 'aboutController',
        controllerAs : 'vm'
      }).
      when('/porto', {
        templateUrl : './tabs/porto.html',
        controller : 'portoController',
        controllerAs : 'vm'
      }).
      otherwise({redirectTo: './tabs/first.html'});
}]);
}());

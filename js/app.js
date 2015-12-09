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
        controllerAs : 'homeCtrl'
      }).
      when('/about', {
        templateUrl : './tabs/about.html',
        controller : 'aboutController',
        controllerAs : 'aboutCtrl'
      }).
      when('/porto', {
        templateUrl : './tabs/porto.html',
        controller : 'portoController',
        controllerAs : 'portoCtrl'
      }).
      otherwise({redirectTo: './tabs/first.html'});
}]);
}());

(function () {
"use strict";
angular
.module('Main')
  .controller('homeController', ['$scope', HomeController]);
  function HomeController($scope){
    $scope.title="Home";
    $scope.content="Welcome,<br/>yo";
  }
}());

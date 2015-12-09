(function () {
"use strict";
angular
.module('Main')
  .controller('aboutController', ['$scope', AboutController]);
  function AboutController($scope){
    $scope.title="About";
  }
}());

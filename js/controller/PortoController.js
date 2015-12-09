(function(){
'use strict';
angular
.module('Main')
  .controller('portoController', ['$scope', PortoController]);
  function PortoController($scope){
    $scope.title="Portfolio";
  }
}());

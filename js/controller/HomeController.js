(function () {
"use strict";
angular
.module('Main')
  .controller('homeController', HomeController);
  function HomeController($scope){
    var vm = this;
    vm.title="Home";
  }
}());

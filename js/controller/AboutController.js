(function () {
"use strict";
angular
.module('Main')
  .controller('aboutController', AboutController);
  function AboutController($scope){
    var vm = this;
    vm.title="About";
  }
}());

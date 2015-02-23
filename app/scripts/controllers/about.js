'use strict';

/**
 * @ngdoc function
 * @name worldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the worldApp
 */
angular.module('worldApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

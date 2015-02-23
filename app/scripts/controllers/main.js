'use strict';

/**
 * @ngdoc function
 * @name worldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the worldApp
 */
angular.module('worldApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

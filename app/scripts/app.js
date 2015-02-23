'use strict';

/**
 * @ngdoc overview
 * @name worldApp
 * @description
 * # worldApp
 *
 * Main module of the application.
 */
angular
  .module('worldApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/food', {
        templateUrl: 'views/food.html',
        controller: 'FoodCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc function
 * @name worldApp.controller:FoodCtrl
 * @description
 * # FoodCtrl
 * Controller of the worldApp
 */
angular.module('worldApp')
 .controller('FoodCtrl', function($scope, $resource) {

        var Food = $resource('http://localhost\\:1337/food', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }   
        }); 

        $scope.food = new Food();
        $scope.foodList = Food.query();

        $scope.saveFood = function() {

            var method = $scope.food.id ? '$update' : '$save';

            $scope.food[method]({}, function() {

                $scope.food = new Food();
                $scope.foodList = Food.query();

                console.log("Saved!!");
            })
        };

        $scope.editFood = function(food) {
            $scope.food = food;
        };


    });
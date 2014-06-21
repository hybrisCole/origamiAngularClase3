'use strict';

/**
 * @ngdoc function
 * @name yeomanOrigamiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanOrigamiApp
 */
angular.module('yeomanOrigamiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

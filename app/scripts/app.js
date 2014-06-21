'use strict';

/**
 * @ngdoc overview
 * @name yeomanOrigamiApp
 * @description
 * # yeomanOrigamiApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanOrigamiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'fx.animations'
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/padronElectoral', {
        templateUrl: 'views/padronelectoral.html',
        controller: 'PadronelectoralCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

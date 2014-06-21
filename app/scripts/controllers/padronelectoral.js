'use strict';

/**
 * @ngdoc function
 * @name yeomanOrigamiApp.controller:PadronelectoralCtrl
 * @description
 * # PadronelectoralCtrl
 * Controller of the yeomanOrigamiApp
 */
angular.module('yeomanOrigamiApp')
  .controller('PadronelectoralCtrl', function ($scope,padronElectoralFactory) {
    $scope.cedula = "603460455";
    $scope.padronElectoral = {};
    $scope.botonLeyenda = 'Buscar Por Cedular';
    $scope.buscarPersona = function(){
      $scope.botonLeyenda = 'Buscando...';
      padronElectoralFactory.buscarPorCedula($scope.cedula)
        .then(function(data){
          alert("2");
          $scope.botonLeyenda = 'Buscar Por Cedular';
          $scope.padronElectoral = data;
      });
    };

  });

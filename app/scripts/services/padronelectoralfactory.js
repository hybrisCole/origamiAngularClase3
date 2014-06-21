'use strict';

/**
 * @ngdoc service
 * @name yeomanOrigamiApp.padronElectoralFactory
 * @description
 * # padronElectoralFactory
 * Factory in the yeomanOrigamiApp.
 */
angular.module('yeomanOrigamiApp')
  .factory('padronElectoralFactory', function ($http,$q) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      buscarPorCedula: function (cedula) {
        var defer = $q.defer();
        $http({method: 'GET', url: 'http://udyat.jit.su/padron/'+cedula}).
          success(function(data, status, headers, config) {
            defer.resolve(data);
            alert("1");
          }).
          error(function(data, status, headers, config) {

            // called asynchronously if an error occurs
            // or server returns response with an error status.
            defer.reject(data);
          });
        return defer.promise;
      }
    };
  });

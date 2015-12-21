'use strict';

/**
 * @ngdoc function
 * @name sistemaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sistemaApp
 */

angular.module('Asura')
  .controller('MainCtrl',['$scope', '$rootScope', 'mainFactory', function($scope, $rootScope, mainFactory) {
  	//activar Loader
  	$scope.cargando		      = true;
  	$rootScope.main 	      = mainFactory;
  	$rootScope.id_cuenta    = 1;
    $scope.roles            = $rootScope.main.roles.query({id: $rootScope.id_cuenta});
    $scope.modulos          = $rootScope.main.modulos.query();
    $scope.usuarios         = $rootScope.main.usuarios.query({id: $rootScope.id_cuenta});
    $scope.locales     	    = $rootScope.main.locales.query({id: $rootScope.id_cuenta});
    $scope.configuraciones  = $rootScope.main.configuraciones.get({id: $rootScope.id_cuenta},function(data){
      //Desactvivar Loader
      //console.log(data);
      $scope.cargando   = false;
    });


  }]);
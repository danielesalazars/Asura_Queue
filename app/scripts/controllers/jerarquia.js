'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:JerarquiaCtrl
 * @description
 * # JerarquiaCtrl
 * Controller of the Asura
 */
angular.module('Asura')
  .controller('JerarquiaCtrl',['$scope','$routeParams', function ($scope, $routeParams) {
    
    $scope.planificacion_jerarquia ='views/planificacion/jerarquias/clientes.html';
    $scope.tab_url = $routeParams.jerarquia;
    console.log($routeParams.jerarquia);
    switch($routeParams.jerarquia){
        case "jerarquias":
        	$scope.planificacion_jerarquia ='views/planificacion/jerarquias/jerarquias.html';
        	break;
        case "importar":
        	$scope.planificacion_jerarquia ='views/planificacion/jerarquias/importar.html';
        	break;
    }
    
  }]);

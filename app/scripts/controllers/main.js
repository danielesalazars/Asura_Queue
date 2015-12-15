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
  	$rootScope.main 	= mainFactory;
  	$rootScope.id_cuenta= 1;
    $scope.roles        = $rootScope.main.roles.query({id: $rootScope.id_cuenta});
    $scope.modulos      = $rootScope.main.modulos.query();
  }]);
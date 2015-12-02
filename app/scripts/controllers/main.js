'use strict';

/**
 * @ngdoc function
 * @name sistemaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sistemaApp
 */

angular.module('Asura')
  .controller('MainCtrl',['$scope', '$rootScope', '$uibModal', 'mainFactory', function($scope, $rootScope, $uibModal, mainFactory) {
  	$rootScope.main 	= mainFactory;
  	$rootScope.id_cuenta= 1;
    $scope.roles        = $rootScope.main.roles.query({id: $scope.id_cuenta});
    $scope.modulos      = $rootScope.main.modulos.query();
  }]);
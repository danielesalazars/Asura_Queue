'use strict';

/**
 * @ngdoc function
 * @name sistemaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sistemaApp
 */

 angular.module('Asura')
 .controller('MainCtrl',[
  '$scope', 
  '$rootScope', 
  'mainFactory',
  '$translate',
  function(
    $scope, 
    $rootScope,
    mainFactory,
    $translate) {

      //cargando data
    	$scope.cargando		      = true;
    	$rootScope.main 	      = mainFactory;
    	$rootScope.id_cuenta    = 1;
      $scope.roles            = $rootScope.main.roles.query({id: $rootScope.id_cuenta});
      $scope.modulos          = $rootScope.main.modulos.query();
      $scope.usuarios         = $rootScope.main.usuarios.query({id: $rootScope.id_cuenta});
      $scope.locales     	    = $rootScope.main.locales.query({id: $rootScope.id_cuenta});
      $scope.grupoatenciones  = $rootScope.main.grupoatenciones.query({id: $scope.id_cuenta});
      $scope.configuraciones  = $rootScope.main.configuraciones.get({id: $rootScope.id_cuenta});

      $scope.jerarquias       = $rootScope.main.jerarquias.get({id: $rootScope.id_cuenta},function(data){
        $scope.cargando   = false;
      });

      //busca y cambia el idioma
      $scope.cambia = function(langKey) {
        $translate.use(langKey);
      };
      //inicializamos el idioma ES
      $scope.idioma = "es";
      $scope.cambia($scope.idioma);
      //coleccion de idiomas
      $scope.idiomas = [
        { idioma: "es" }, 
        { idioma: "en" }
      ];
      //cambiar al idioma seleccionado
      $scope.cambia_idioma = function () {
        $scope.cambia($scope.idioma);
      }







  }]);
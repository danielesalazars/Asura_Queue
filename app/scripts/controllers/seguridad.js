'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:SeguridadCtrl
 * @description
 * # SeguridadCtrl
 * Controller of the Asura
 */
 angular.module('Asura')
 .controller('SeguridadCtrl',['$scope','$rootScope', function ($scope, $rootScope) {
 	var datepicker = angular.element('.datepicker, .datepicker_codigo');
 	var Configuracion = $rootScope.main.configuracion;
 	datepicker.datepicker();

 	$rootScope.main.configuraciones.get({id: $rootScope.id_cuenta},function(data){
 		var autenticacion = data[0]['seguridad_codigo_autenticacion_tipo'];
 		var codigo = data[0]['seguridad_codigo_kiosco_tipo'];
 		$scope.up_autenticacion(parseInt(autenticacion));
 		$scope.up_codigo(parseInt(codigo));
 	});

 	// activar autenticacion y codigo
 	$scope.estado_au = false;
 	$scope.estado_co = false;

 	$scope.radio_autenticacion = function(valor){
 		$scope.up_autenticacion(valor);
 		$scope.configuraciones[0]['seguridad_codigo_autenticacion_tipo'] = valor;	
 	}

 	$scope.radio_codigo = function(valor){
 		$scope.up_codigo(valor);
 		$scope.configuraciones[0]['seguridad_codigo_kiosco_tipo'] = valor;	
 	}

 	$scope.up_autenticacion = function(valor){		
 		switch(valor){
 			case 1 : $scope.valor_autenticacion = 'Nunca actualizar' ; break;
 			case 2 : $scope.valor_autenticacion = 'Actualizar una vez al mes' ; break;
 			case 3 : $scope.valor_autenticacion = 'Actualizar una vez a la semana' ; break;
 			case 4 : $scope.valor_autenticacion = 'Actualizar una vez al día' ; break;
 			case 5 : $scope.valor_autenticacion = 'Actualizar cada ' + $scope.configuraciones[0]['seguridad_codigo_autenticacion_dias'] +' días' ; break;
 		}
 	}

 	$scope.up_codigo = function(valor){		
 		switch(valor){
 			case 1 : $scope.valor_codigo = 'Nunca actualizar' ; break;
 			case 2 : $scope.valor_codigo = 'Actualizar una vez al mes' ; break;
 			case 3 : $scope.valor_codigo = 'Actualizar una vez a la semana' ; break;
 			case 4 : $scope.valor_codigo = 'Actualizar una vez al día' ; break;
 			case 5 : $scope.valor_codigo = 'Actualizar cada ' + $scope.configuraciones[0]['seguridad_codigo_kiosco_dias'] +' días' ; break;
 		}
 	}

 	$scope.update_autenticacion = function(){
 		var fecha_autenticacion = angular.element('.datepicker');
 		var data = [
	 		{
	 			"cuenta_id": $rootScope.id_cuenta,
	 			"configuracion":
	 			{
	 				"seguridad_codigo_autenticacion_tipo": $scope.configuraciones[0]['seguridad_codigo_autenticacion_tipo'],
	 				"seguridad_codigo_autenticacion_dias": $scope.configuraciones[0]['seguridad_codigo_autenticacion_dias'],
	 				"seguridad_codigo_autenticacion_fecha": fecha_autenticacion.val(),
	 			}
	 		}
 		];

 		Configuracion.post(data,function(data){
 			console.log(data);
 		})
 	}

 	$scope.update_codigo = function(){
 		var fecha_codigo = angular.element('.datepicker_codigo');
 		var data = [
	 		{
	 			"cuenta_id": $rootScope.id_cuenta,
	 			"configuracion":
	 			{
	 				"seguridad_codigo_kiosco_tipo": $scope.configuraciones[0]['seguridad_codigo_kiosco_tipo'],
	 				"seguridad_codigo_kiosco_dias": $scope.configuraciones[0]['seguridad_codigo_kiosco_dias'],
	 				"seguridad_codigo_kiosco_fecha": fecha_codigo.val(),
	 			}
	 		}
 		];

 		Configuracion.post(data,function(data){
 			console.log(data);
 		})
 	}

 	$scope.activar_autenticacion = function(){
 		$scope.estado_au = true;
 		$scope.estado_co = false;
 	}

 	$scope.activar_codigo = function(){
 		$scope.estado_co = true;
 		$scope.estado_au = false;
 	}

 }]);

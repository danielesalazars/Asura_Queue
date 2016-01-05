'use strict';

/**
 * @ngdoc function
 * @name sistemaApp.controller:RolesCtrl
 * @description
 * # RolesCtrl
 * Controller of the sistemaApp
 */
 angular.module('Asura')
	.controller('GatencionCtrl',['$scope','$rootScope', function($scope, $rootScope) {
		//estado de slide derecho
		$scope.estado = false;	
		//creamos un objeto que <conte></conte>ndra los datos del formulario
		$scope.grupoatencion = [];
		//recuperamos el $resource de grupoatencion
		var Grupoatencion = $rootScope.main.grupoatencion;

		$scope.id_grupoatencion = 0;
	    $scope.show_crear = function(){
			//asignar titulo cabecera al slide
			$scope.act_btn_crear 	= true;
			$scope.act_btn_up 		= !$scope.act_btn_crear;
	    	$scope.title_slide = 'Crear grupo de atención';

	    	$scope.grupoatencion.nombre = '';
	    	$scope.estado = true;
    	}

		$scope.show_editar = function(_id){
			$scope.id_grupoatencion = _id;
			
			Grupoatencion.get({id:_id},function(data){ //si es ok entra recien a la funcion
				$scope.act_btn_crear 	= false;
				$scope.act_btn_up 		= !$scope.act_btn_crear;
				$scope.title_slide = 'Editar grupo de atención';

				$scope.grupoatencion.nombre = data[0]["nombre"]; //siempre 0
				$scope.grupoatencion.inicial = data[0]["inicial"];
				$scope.grupoatencion.color_ = data[0]["color_"];
				$scope.estado = true;
				 //activar o desactivar ITEM
		        $scope.local.disabled     = false;
		        if(data[0]['id'] < 4){
		          $scope.local.disabled   = true;
		        }
				//console.log(data); //muestra el detalle del parametro
			})
			

		}

    	$scope.crear = function(){
    		var data =[ {
				'nombre': $scope.grupoatencion.nombre,
				'cuenta_id': $rootScope.id_cuenta,
				'inicial': $scope.grupoatencion.inicial,
				'color_': $scope.grupoatencion.color_,
			}];
			Grupoatencion.post(null, data, function(){
				$rootScope.main.grupoatenciones.query({id: $rootScope.id_cuenta}, function(data){
					$scope.grupoatenciones = data;
					$scope.estado = !$scope.estado;
				});
			});
    	}

    	$scope.actualizar = function(){
    		var data = [
				    {
				        'nombre': $scope.grupoatencion.nombre,
						'inicial': $scope.grupoatencion.inicial,
						'color_': $scope.grupoatencion.color_,
						'cuenta_id': $rootScope.id_cuenta
				    }
				];
			Grupoatencion.update({id: $scope.id_grupoatencion}, data,function(){
				$rootScope.main.grupoatenciones.query({id: $rootScope.id_cuenta}, function(data){
					$scope.grupoatenciones = data;
					$scope.estado = !$scope.estado;
				});
			});
    	}

    	$scope.eliminar = function(_id){
    		Grupoatencion.delete({id: _id},function(){
				$rootScope.main.grupoatenciones.query({id: $rootScope.id_cuenta}, function(data){
					$scope.grupoatenciones = data;
				});
    		})
    	}

	    $scope.close = function(){
	    	$scope.estado = !$scope.estado;
    	}

	}]);
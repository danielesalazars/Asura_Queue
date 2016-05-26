'use strict';

/**
 * @ngdoc function
 * @name sistemaApp.controller:RolesCtrl
 * @description
 * # RolesCtrl
 * Controller of the sistemaApp
 */
 angular.module('Asura')
	.controller('RolesCtrl',['$scope','$rootScope', function($scope, $rootScope) {
		//estado de slide derecho
		$scope.estado = false;	
		//creamos un objeto que contendra los datos del formulario
		$scope.rol = [];
		//recuperamos el $resource de rol
		var Rol = $rootScope.main.rol;

		$scope.id_rol = 0;
	    $scope.showCrear = function(){
			//asignar titulo cabecera al slide
			$scope.act_btn_crear 	= true;
			$scope.act_btn_up 		= !$scope.act_btn_crear;
	    	$scope.title_slide = 'Crear Rol';
	    	$scope.disabled = false;
			//asignar nombre al input
	    	$scope.rol.nombre = '';
	    	//agregamos y limpiamos los check
	    	for (var i = 0; i < $scope.modulos.length; i++) {
	    		$scope.modulos[i]['check'] = false;
	    	};
	    	//mostramos el slide
	    	$scope.estado = true;
    	}

    	$scope.crear = function(){
    		var data = recover_data_modulos();
			Rol.post(data, function(){
				refresh_roles();
			});
    	}

		$scope.showEditar = function(_id){
			//resasignamos la variable rol
			$scope.id_rol = _id;

			Rol.get({id: _id}, function(data){
				//asignar titulo cabecera al slide
				$scope.act_btn_crear 	= false;
				$scope.act_btn_up 		= !$scope.act_btn_crear;
	    		$scope.title_slide = 'Editar Rol';
				//asignar nombre al input
				$scope.rol.nombre = data[0]['nombre'];
				//recuperar permisos de rol
				var permisos = data[0]['ownModulo_rol'];
				//activar o desactivar input
				$scope.disabled = false;
				if( _id < 6 ){
					$scope.disabled = true;
				}
				//@param id : recibe el id de lalista de roles
    			function rol_permiso(_id){
    				//la lista de permisos esta vacia
    				if(permisos == undefined){
    					return false;
    				}
    				//la lista de permisos contiene datos
					for (var i = 0; i < permisos.length; i++) {
						//el ID del rol = ID del modulo
    					if( _id == permisos[i]['modulo_id'] ){
    						return true;
    					}
    				}
				}
				//recorremos el array
				for (var i = 0; i < $scope.modulos.length; i++) {
					//llamamos a la funcion 
					var permiso_id = rol_permiso($scope.modulos[i]['id']) ;
					//si la funcion retorna verdadero
    				if(permiso_id){
    					//asigno clase
    					$scope.modulos[i]['check'] = true;
    				}else{
    					//asigno clase
    					$scope.modulos[i]['check'] = false;
    				}
				}
				//activar slide derecho
				$scope.estado = true;
			});
		}

    	$scope.actualizar = function(){
    		//activando Loader
			$scope.$parent.cargando		= true;
    		var data = recover_data_modulos();
			Rol.update({id: $scope.id_rol}, data,function(){
				refresh_roles();
			});
    	}

    	$scope.eliminar = function(_id){
    		Rol.delete({id: _id},function(){
				$rootScope.main.roles.query({id: $rootScope.id_cuenta}, function(data){
					$scope.roles = data;
				});
    		})
    	}

	    $scope.close = function(){
	    	$scope.estado = !$scope.estado;
    	}

    	$scope.checked = function(_id, indice){
    		$scope.modulos[indice]['check'] = !$scope.modulos[indice]['check'];
    	}

    	function refresh_roles(){
    		$rootScope.main.roles.query({id: $rootScope.id_cuenta}, function(data){
				$scope.roles = data;
				$scope.estado = !$scope.estado;
				//Desactivando Loader
				$scope.$parent.cargando		= false;
			});
    	}

    	function recover_data_modulos(){
    		var modulos = [];
    		for (var i = 0; i < $scope.modulos.length; i++) {
    			if($scope.modulos[i]['check']){
    				modulos.push({
    					id : $scope.modulos[i]['id']
    				});
    			}
    		};
    		var data = [
			    {
			        "nombre": 		$scope.rol.nombre,
			        "cuenta_id": 	$rootScope.id_cuenta,
			        "modulos": 		modulos
			    }
			];
			return data;
    	}

	}]);

		
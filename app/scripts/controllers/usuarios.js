'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the Asura
 */
angular.module('Asura')
  .controller('UsuariosCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  		//estado de slide derecho
		$scope.estado = false;	
		//creamos un objeto que contendra los datos del formulario
		$scope.usuario = [];
		//recuperamos el $resource de usuario
		var Usuario = $rootScope.main.usuario;

		$scope.id_usuario = 0;
	    $scope.show_crear = function(){
			//asignar titulo cabecera al slide
			$scope.act_btn_crear 	= true;
			$scope.act_btn_up 		= !$scope.act_btn_crear;
	    	$scope.title_slide = 'Crear Usuario';
			//asignar nombre al input
	    	$scope.usuario.nombre 			= '';
			$scope.usuario.email_trabajo 	= '';
	    	//mostramos el slide
	    	$scope.estado = true;
    	}

    	$scope.crear = function(){
    		var data = recover_data_usuarios();
			Usuario.post(data, function(){
				refresh_usuarios();
			});
    	}

    	$scope.show_editar = function(_id){
			//resasignamos la variable usuario
			$scope.id_usuario = _id;
			Usuario.get({id: _id}, function(data){
				//asignar titulo cabecera al slide
				$scope.act_btn_crear 	= false;
				$scope.act_btn_up 		= !$scope.act_btn_crear;
	    		$scope.title_slide = 'Editar Usuario';
				//asignar nombre al input
				$scope.usuario.nombre 			= data[0]['nombre'];
				$scope.usuario.email_trabajo 	= data[0]['email_trabajo'];
				//activar slide derecho
				$scope.estado = true;
			});
		}

	    $scope.close = function(){
	    	$scope.estado = !$scope.estado;
    	}

    	function refresh_usuarios(){
    		$rootScope.main.usuarios.query({id: $rootScope.id_cuenta}, function(data){
				$scope.usuarios = data;
				$scope.estado = !$scope.estado;
			});
    	}

    	function recover_data_usuarios(){
    		var data = [
			    {
			        "nombre": 		$scope.usuario.nombre,
			        "cuenta_id": 	$rootScope.id_cuenta,
			        "rol_id": 		$scope.rol_id
			    }
			];
			return data;
    	}
  }]);

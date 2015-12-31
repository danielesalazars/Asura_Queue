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
			//$scope.usuario.rol_id 			= 3;
			for (var i = 0; i < $scope.locales.length; i++) {
	    		$scope.locales[i]['check'] = false;
	    	};
	    	//mostramos el slide
	    	$scope.estado = true;
    	}

    	$scope.crear = function(){
    		var data = recover_data_usuarios();
    		//console.log(data);
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
				$scope.usuario.rol_id 			= data[0]['rol_id'];
				//activar o desactivar ITEM
				$scope.usuario.disabled			= false;
				if(data[0]['id'] < 4){
					$scope.usuario.disabled 	= true;
				}
				//recuperar locales de rol
				var locales = data[0]['ownLocal_usuario'];
				//@param id : recibe el id de lalista de roles
    			function local_permiso(_id){
    				//la lista de locales esta vacia
    				if(locales == undefined){
    					return false;
    				}
    				//la lista de locales contiene datos
					for (var i = 0; i < locales.length; i++) {
						//el ID del rol = ID del modulo
    					if( _id == locales[i]['local_id'] ){
    						return true;
    					}
    				}
				}
				//recorremos el array
				for (var i = 0; i < $scope.locales.length; i++) {
					//llamamos a la funcion 
					var permiso_id = local_permiso($scope.locales[i]['id']) ;
					//si la funcion retorna verdadero
    				if(permiso_id){
    					//asigno clase
    					$scope.locales[i]['check'] = true;
    				}else{
    					//asigno clase
    					$scope.locales[i]['check'] = false;
    				}
				}
				//activar slide derecho
				$scope.estado = true;
			});
		}

    	$scope.actualizar = function(){
    		var data = recover_data_usuarios();
			Usuario.update({id: $scope.id_usuario}, data,function(){
				refresh_usuarios();
			});
    	}

    	$scope.eliminar = function(_id){
    		Usuario.delete({id: _id},function(){
				$rootScope.main.usuarios.query({id: $rootScope.id_cuenta}, function(data){
					$scope.usuarios = data;
				});
    		})
    	}

	    $scope.close = function(){
	    	$scope.estado = !$scope.estado;
    	}

    	$scope.checked = function(_id, indice){
    		$scope.locales[indice]['check'] = !$scope.locales[indice]['check'];
    	}

    	function refresh_usuarios(){
    		$rootScope.main.usuarios.query({id: $rootScope.id_cuenta}, function(data){
				$scope.usuarios = data;
				$scope.estado = !$scope.estado;
			});
    	}

    	function recover_data_usuarios(){
    		var locales = [];
    		for (var i = 0; i < $scope.locales.length; i++) {
    			if($scope.locales[i]['check']){
    				locales.push({
    					id : $scope.locales[i]['id']
    				});
    			}
    		};
			var data = [
			    {
			        "login":$scope.usuario.nombre,
			        "clave":"",
			        "nombre":$scope.usuario.nombre,
			        "apellido":"",
			        "email_trabajo":$scope.usuario.email_trabajo,
			        "es_titular":false,
			        "es_admin":false,
			        "es_activo":true,
			        "cuenta_id":$rootScope.id_cuenta,
			        "rol_id":$scope.usuario.rol_id,
			        "sharedLocal": locales
			    }
			];
			return data;
    	}
  }]);

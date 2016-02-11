'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:EstilosCtrl
 * @description
 * # EstilosCtrl
 * Controller of the Asura
 */
 angular.module('Asura')
 .controller('EstilosCtrl',['$scope','$rootScope','$routeParams', function ($scope, $rootScope, $routeParams) {
	minicolors();
	estilos_kiosco_html();
	estilos_identificacion_html();
	estilos_escaneo_html();
	estilos_menu_html()
	estilos_video_html();
	estilos_multi_page_html();
	estilos_kiosco();

	$scope.estado = true;

	function minicolors(){
		$scope.mini_generales = {position: 'top right',letterCase: 'uppercase'};
	}

    function estilos_kiosco_html(){
	 	if( $routeParams.estilo == "bienvenida_imagenes"  	||
	 		$routeParams.estilo == "bienvenida_textos"     	||
	 		$routeParams.estilo == "bienvenida_botones"   	||
	 		$routeParams.estilo == "bienvenida_boton_ticket"||
	 		$routeParams.estilo == "bienvenida_mensajes"        ){

	 		$scope.estilo = "views/configuracion/estilos/kioscos.html";
	 	}
    }

    function estilos_identificacion_html(){
	 	if( $routeParams.estilo == "identificacion_imagenes"  	||
	 		$routeParams.estilo == "identificacion_textos"  	||
	 		$routeParams.estilo == "identificacion_botones"        ){

	 		$scope.estilo = "views/configuracion/estilos/identificacion.html";
	 	}
    }

    function estilos_escaneo_html(){
	 	if( $routeParams.estilo == "escaneo_imagenes"  	||
	 		$routeParams.estilo == "escaneo_textos"        ){

	 		$scope.estilo = "views/configuracion/estilos/escaneo.html";
	 	}
    }

    function estilos_menu_html(){
	 	if( $routeParams.estilo == "menu_imagenes"  	||
	 		$routeParams.estilo == "menu_botones"   	||
	 		$routeParams.estilo == "menu_mensajes"||
	 		$routeParams.estilo == "menu_administracion"        ){

	 		$scope.estilo = "views/configuracion/estilos/menu.html";
	 	}
    }

    function estilos_video_html(){
    	if( $routeParams.estilo == "videos_generales"   ||
	 		$routeParams.estilo == "videos_colores"     ){
			$scope.estilo = "views/configuracion/estilos/videos.html";
		}
    }

    function estilos_multi_page_html(){
		switch($routeParams.estilo){
			case "consola":
				$scope.estilo = "views/configuracion/estilos/consola.html";
				break;
			/* KIOSCOS */
			case "bienvenida_imagenes":
				$scope.img_estilos_kioscos  = 'images/qmatiq_bienvenido-generales.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/imagenes.html';
				break;
			case "bienvenida_textos":
				$scope.img_estilos_kioscos  = 'images/qmatiq_bienvenido-generales.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/textos.html';
				break;
			case "bienvenida_botones":
				$scope.img_estilos_kioscos  = 'images/qmatiq_bienvenido-generales.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/botones.html';
				break;
			case "bienvenida_boton_ticket":
				$scope.img_estilos_kioscos  = 'images/qmatiq_bienvenido-generales.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/boton_ticket.html';
				break;
			case "bienvenida_mensajes":
				$scope.img_estilos_kioscos  = 'images/qmatiq_bienvenido-mensajes.png';
				$scope.estilos_kiosco       = 'views/configuracion/estilos/kioscos/mensajes.html';
				break;
			/* IDENTIFICACION */
			case "identificacion_imagenes":
				$scope.img_estilos_kioscos  	= 'images/qmatiq_identificacion-imagenes.png';
				$scope.estilos_identificacion 	= 'views/configuracion/estilos/identificacion/imagenes.html';
				break;
			case "identificacion_textos":
				$scope.img_estilos_kioscos  	= 'images/qmatiq_identificacion-imagenes.png';
				$scope.estilos_identificacion  	= 'views/configuracion/estilos/identificacion/textos.html';
				break;
			case "identificacion_botones":
				$scope.img_estilos_kioscos  	= 'images/qmatiq_identificacion-imagenes.png';
				$scope.estilos_identificacion 	= 'views/configuracion/estilos/identificacion/botones.html';
				break;
			/* ESCANEO */
			case "escaneo_imagenes":
				$scope.img_estilos_kioscos  = 'images/qmatiq_escaneo-imagenes.png';
				$scope.estilos_escaneo 		= 'views/configuracion/estilos/escaneo/imagenes.html';
				break;
			case "escaneo_textos":
				$scope.img_estilos_kioscos  = 'images/qmatiq_escaneo-imagenes.png';
				$scope.estilos_escaneo  	= 'views/configuracion/estilos/escaneo/textos.html';
				break;
			/* MENU */
			case "menu_imagenes":
				$scope.img_estilos_kioscos  = 'images/qmatiq_MenuAdmin-imagenes.png';
				$scope.estilos_menu 		= 'views/configuracion/estilos/menu/imagenes.html';
				break;
			case "menu_botones":
				$scope.img_estilos_kioscos  = 'images/qmatiq_MenuAdmin-imagenes.png';
				$scope.estilos_menu 		= 'views/configuracion/estilos/menu/botones.html';
				break;
			case "menu_mensajes":
				$scope.img_estilos_kioscos  = 'images/qmatiq_MenuAdmin-Mensajes.png';
				$scope.estilos_menu 		= 'views/configuracion/estilos/menu/mensajes.html';
				break;
			case "menu_administracion":
				$scope.img_estilos_kioscos  = 'images/qmatiq_MenuAdmin-Admin.png';
				$scope.estilos_menu 		= 'views/configuracion/estilos/menu/administracion.html';
				break;
			/* VIDEOS */
			case "videos_generales":
				$scope.img_estilos_kioscos  = 'images/qmatiq_video-formato.png';
				$scope.estilos_video       = 'views/configuracion/estilos/videos/formatos.html';
				break;
			case "videos_colores":
				$scope.img_estilos_kioscos  = 'images/qmatiq_video-formato.png';
				$scope.estilos_video       = 'views/configuracion/estilos/videos/colores.html';
				break;
			/* MOVILES */
			case "moviles":
				$scope.estilo = "views/configuracion/estilos/moviles.html";
				break;
		}
    }
 	
    $scope.activar_slide = function(){
		$scope.estado = true;
    }

 	function estilos_kiosco(){
 		$scope.tab_url = $routeParams.estilo;
 	}
 	
 	$scope.checked = function(modelo){
 		//console.log(modelo);
 		if($scope.configuraciones[0][modelo] == 0){
			$scope.configuraciones[0][modelo] = 1;
 		}else{
			$scope.configuraciones[0][modelo] = 0;
 		}
	}
    
    $scope.close = function(){
    	$scope.estado = !$scope.estado;
	}

}]);

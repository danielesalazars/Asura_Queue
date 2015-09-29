angular.module('Sistema',['ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller:		"homeController",
			templateUrl:	"./templates/home.html"
		})
		.when("/configurar",{
			controller:		"configurarController",
			templateUrl:	"./templates/configuracion/index.html"
		})
		.when("/configurar/roles",{
			controller:		"rolesController",
			templateUrl:	"./templates/configuracion/roles.html"
		})
		.when("/configurar/usuarios",{
			controller:		"usuariosController",
			templateUrl:	"./templates/configuracion/usuarios.html"
		})
		.when("/configurar/estilos",{
			controller:		"estilosController",
			templateUrl:	"./templates/configuracion/estilos.html"
		})
		.when("/configurar/seguridad",{
			controller:		"seguridadController",
			templateUrl:	"./templates/configuracion/seguridad.html"
		})
		.when("/configurar/peticiones",{
			controller:		"peticionesController",
			templateUrl:	"./templates/configuracion/peticiones.html"
		})
		.when("/planificacion",{
			controller:		"planificacionController",
			templateUrl:	"./templates/planificacion/index.html"
		})
		.when("/planificacion/locales",{
			controller:		"localesController",
			templateUrl:	"./templates/planificacion/locales.html"
		})
		.when("/planificacion/gatencion",{
			controller:		"gatencionController",
			templateUrl:	"./templates/planificacion/gatencion.html"
		})
		.when("/planificacion/logica",{
			controller:		"logicaController",
			templateUrl:	"./templates/planificacion/logica.html"
		})
		.when("/video",{
			controller:		"videoController",
			templateUrl:	"./templates/video/index.html"
		})
		.when("/video/playlist",{
			controller:		"playlistController",
			templateUrl:	"./templates/video/playlist.html"
		})
		.when("/atencion",{
			controller:		"atencionController",
			templateUrl:	"./templates/atencion/index.html"
		})
		.when("/atencion/mod_atencion5",{
			controller:		"mod_atencion5Controller",
			templateUrl:	"./templates/atencion/mod_atencion5.html"
		})
		.when("/atencion/supervision",{
			controller:		"supervisionController",
			templateUrl:	"./templates/atencion/supervision.html"
		})
		.when("/atencion/crit_atencion",{
			controller:		"crit_atencionController",
			templateUrl:	"./templates/atencion/crit_atencion.html"
		})
		.when("/atencion/msj_alerta",{
			controller:		"msj_alertaController",
			templateUrl:	"./templates/atencion/msj_alerta.html"
		})
		.when("/reportes",{
			controller:		"reportesController",
			templateUrl:	"./templates/reportes/index.html"
		});
});
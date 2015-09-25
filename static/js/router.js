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
		.when("/planificacion",{
			controller:		"planificacionController",
			templateUrl:	"./templates/planificacion/index.html"
		})
		.when("/video",{
			controller:		"videoController",
			templateUrl:	"./templates/video/index.html"
		})
		.when("/atencion",{
			controller:		"atencionController",
			templateUrl:	"./templates/atencion/index.html"
		})
		.when("/reportes",{
			controller:		"reportesController",
			templateUrl:	"./templates/reportes/index.html"
		});
});
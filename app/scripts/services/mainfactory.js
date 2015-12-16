'use strict';

/**
 * @ngdoc service
 * @name sistemaApp.mainFactory
 * @description
 * # mainFactory
 * Factory in the sistemaApp.
 */
angular.module('Asura')
	.factory('mainFactory',['$resource', 'URL', function($resource, URL) {

		function recoverDataGet(ruta){
			return $resource(URL.path + ruta, {id : '@_id'},
				{
					'get' : {method:'GET', isArray: true }
				});
		}

		function recoverDataCrud(ruta){
			return $resource(URL.path + ruta,{id: '@_id'},
				{
					'get'	: { method: 'GET', isArray: true },
					'update': { method: 'PUT', isArray: true },
					'post'	: { method: 'POST', isArray: true },
					'remove': { method: 'DELETE'},
					'delete': { method: 'DELETE'}
				});
		}
	
		return {
			roles: 		recoverDataGet('roles/cuenta/:id'),
			rol: 		recoverDataCrud('roles/:id'),
			locales: 	recoverDataGet('locales/cuenta/:id'),
			local: 		recoverDataCrud('locales/:id'),
			grupoatenciones: 	recoverDataGet('grupoatencion/cuenta/:id'),
			grupoatencion: 		recoverDataCrud('grupoatencion/:id'),
			modulos: 	recoverDataGet('modulos/:id'),
			usuarios: 	recoverDataGet('usuarios/:id'),
		};
	}]);
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
		return {
			roles: $resource(URL.path + 'roles/cuenta/:id', {id : '@_id'},
				{
					'get' : {method:'GET', isArray: true}
				}),
			rol: $resource(URL.path + 'roles/:id',{id: '@_id'},
				{
					'get'	: { method: 'GET', isArray: true },
					'update': { method: 'PUT', isArray: true },
					'post'	: { method: 'POST', isArray: true },
					'remove': { method: 'DELETE'},
					'delete': { method: 'DELETE'}
				}),
			modulos: $resource(URL.path + 'modulos/:id', {id : '@_id'},
				{
					'get' : {method:'GET', isArray: true}
				}),
		};
	}]);
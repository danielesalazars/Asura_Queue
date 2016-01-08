'use strict';

/**
 * @ngdoc function
 * @name sistemaApp.controller:RolesCtrl
 * @description
 * # RolesCtrl
 * Controller of the sistemaApp
 */
 angular.module('Asura')
  .controller('LocalesCtrl',['$scope','$rootScope', function ($scope, $rootScope) {
    //estado de slide derecho
    $scope.estado = false;  
    //creamos un objeto que <conte></conte>ndra los datos del formulario
    $scope.local = [];
    //recuperamos el $resource de local
    var Local = $rootScope.main.local;

    $scope.id_local = 0;
      $scope.show_crear = function(){
      //asignar titulo cabecera al slide
      $scope.act_btn_crear  = true;
      $scope.act_btn_up     = !$scope.act_btn_crear;
        $scope.title_slide = 'Crear Local';
        //asignar nombre al input
        $scope.local.nombre = '';
        $scope.estado = true;
      }

    $scope.show_editar = function(_id){
      $scope.id_local = _id;
      Local.get({id: _id}, function(data){ //si es ok entra recien a la funcion
        $scope.act_btn_crear  = false;
        $scope.act_btn_up     = !$scope.act_btn_crear;
        $scope.title_slide = 'Editar Local';

        $scope.local.nombre = data[0]["nombre"]; //siempre 0
        $scope.local.ventanillas = data[0]["ventanillas"];
        $scope.local.kiosco_codigo = data[0]["kiosco_codigo"];
        $scope.local.ubicacion = data[0]["ubicacion"];
        $scope.local.es_publicado = data[0]["es_publicado"];
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
        'nombre': $scope.local.nombre,
        'cuenta_id': $rootScope.id_cuenta,
        'ventanillas': $scope.local.ventanillas,
        'kiosco_codigo': $scope.local.kiosco_codigo,
        'ubicacion': $scope.local.ubicacion,
        'es_publicado': $scope.local.es_publicado,
      }];
      
      Local.post(null, data, function(){
        //console.log (data);
        $rootScope.main.locales.query({id: $rootScope.id_cuenta}, function(data){ 
          $scope.locales = data;
          $scope.estado = !$scope.estado;
        });
      });
      }

      $scope.actualizar = function(){
        var data = [
            {
            'nombre': $scope.local.nombre,
            'ventanillas': $scope.local.ventanillas,
            'kiosco_codigo': $scope.local.kiosco_codigo,
            'ubicacion': $scope.local.ubicacion,
            'es_publicado': $scope.local.es_publicado,
            'cuenta_id': $rootScope.id_cuenta
            }
        ];
      Local.update({id: $scope.id_local}, data,function(){
        $rootScope.main.locales.query({id: $rootScope.id_cuenta}, function(data){
          $scope.locales = data;
          $scope.estado = !$scope.estado;
        });
      });
      }

      $scope.eliminar = function(_id){
        Local.delete({id: _id},function(){
        $rootScope.main.locales.query({id: $rootScope.id_cuenta}, function(data){
          $scope.locales = data;
        });
        })
      }

      $scope.close = function(){
        $scope.estado = !$scope.estado;
      }

  }]);
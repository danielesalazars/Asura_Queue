'use strict';

/**
 * @ngdoc function
 * @name sistemaApp.controller:RolesCtrl
 * @description
 * # RolesCtrl
 * Controller of the sistemaApp
 */
 angular.module('Asura')
 .controller('LocalesCtrl',[
  '$scope',
  '$rootScope',
  '$log',
  function ($scope, $rootScope, $log) {
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
      $scope.local.ventanillas =    '';
      $scope.local.kiosco_codigo =  '';
      $scope.local.ubicacion =      '0,0';
      $scope.local.es_publicado =   '';

      mapa(0,0);
      $scope.estado = true;
    }

    $scope.show_editar = function(_id){
      $scope.id_local = _id;
      Local.get({id: _id}, function(data){ //si es ok entra recien a la funcion
        $scope.act_btn_crear  =       false;
        $scope.act_btn_up     =       !$scope.act_btn_crear;
        $scope.title_slide =          'Editar Local';

        $scope.local.nombre =         data[0]["nombre"]; //siempre 0
        $scope.local.ventanillas =    data[0]["ventanillas"];
        $scope.local.kiosco_codigo =  data[0]["kiosco_codigo"];
        $scope.local.ubicacion =      data[0]["ubicacion"];
        $scope.local.es_publicado =   data[0]["es_publicado"];
        //activar o desactivar ITEM
        $scope.local.disabled     = false;
        if(data[0]['id'] < 4){
          $scope.local.disabled   = true;
        }

        var ubicacion = $scope.local.ubicacion;
        var coordenadas = ubicacion.split(',');

        if(coordenadas.length == 0){
          coordenadas = [0,0];
        }

        mapa(coordenadas[0], coordenadas[1]);

        $scope.estado = true;

      });
    }

    function mapa(latitude, longitude ){
      var zoom = 12;
      if(latitude == 0 && longitude == 0){
        zoom = 0;
      }
      $scope.map = {center: {latitude: latitude, longitude: longitude }, zoom: zoom };
      $scope.options = {scrollwheel: false};
      $scope.coordsUpdates = 0;
      $scope.dynamicMoveCtr = 0;

      $scope.marker = {
        id: 0,
        coords: {
          latitude: latitude,
          longitude: longitude
        },
        options: { draggable: true },
        events: {
          dragend: function (marker, eventName, args) {
            var lat = marker.getPosition().lat();
            var lon = marker.getPosition().lng();
            $scope.local.ubicacion = lat + ',' + lon;
          }
        }
      };
    }

    $scope.crear = function(){
      var data = [
        {
          'nombre':         $scope.local.nombre,
          'ventanillas':    $scope.local.ventanillas,
          'kiosco_codigo':  $scope.local.kiosco_codigo,
          'ubicacion':      $scope.local.ubicacion,
          'es_publicado':   1,
          'cuenta_id':      $rootScope.id_cuenta
        }
      ];

      Local.post(data,function(){
        $rootScope.main.locales.query({id: $rootScope.id_cuenta}, function(data){
          $scope.locales = data;
          $scope.estado = !$scope.estado;
        });
      });
    }

    $scope.actualizar = function(){
      var data = [
      {
        'nombre':         $scope.local.nombre,
        'ventanillas':    $scope.local.ventanillas,
        'kiosco_codigo':  $scope.local.kiosco_codigo,
        'ubicacion':      $scope.local.ubicacion,
        'es_publicado':   1,
        'cuenta_id':      $rootScope.id_cuenta
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
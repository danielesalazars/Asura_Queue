'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the demoApp
 */
angular.module('Asura')
  .controller('FileCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
    var Archivos = $rootScope.main.archivos;
    var Configuracion = $rootScope.main.configuracion;
    //Logos
    var logo1 = angular.element('#logo1');
    var logo2 = angular.element('#logo2');
    //Input
    var input_logo1 = angular.element('#input_logo1');
    var input_logo2 = angular.element('#input_logo2');

    logo1.change(function() {
      $scope.configuraciones[0]['estilo_consola_logo1_archivo']['url'] = logo1.val();
      input_logo1.val( logo1.val() );

    });

    logo2.change(function() {
      $scope.configuraciones[0]['estilo_consola_logo2_archivo']['url'] = logo2.val();
      input_logo2.val( logo2.val() );

    });

     $scope.actualizar = function() {
      var archivo = {
        cuenta_id : 1,
        data : logo1.val()
      }
      Archivos.post(logo,function(data){
        console.log('exito');
      });
      /*var data = [
        {
          "cuenta_id": $rootScope.id_cuenta,
          "configuracion":
          {

            "estilo_consola_principal_fondo_color": $scope.configuraciones[0]['estilo_consola_principal_fondo_color'],
            "estilo_consola_principal_texto_color": $scope.configuraciones[0]['estilo_consola_principal_texto_color'],
            "estilo_consola_secundario_fondo_color": $scope.configuraciones[0]['estilo_consola_secundario_fondo_color'],
            "estilo_consola_secundario_texto_color": $scope.configuraciones[0]['estilo_consola_secundario_texto_color'],
          }
        }
      ];
      Configuracion.post(data,function(data){
        console.log(data);
      })*/
    };
  }]);

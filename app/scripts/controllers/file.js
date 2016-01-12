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

    $scope.checked = function(modelo){
      if($scope.configuraciones[0][modelo] == 0){
        $scope.configuraciones[0][modelo] = 1;
      }else{
        $scope.configuraciones[0][modelo] = 0;
      }
    }
    
    $scope.radio = function(valor){
      switch(valor){
        case 1 : $scope.configuraciones[0]['estilo_video_formato'] = 1; break;
        case 2 : $scope.configuraciones[0]['estilo_video_formato'] = 2; break;
        case 3 : $scope.configuraciones[0]['estilo_video_formato'] = 3; break;
        case 4 : $scope.configuraciones[0]['estilo_video_formato'] = 4; break;
        case 5 : $scope.configuraciones[0]['estilo_video_formato'] = 5; break;
      }
    }

    $scope.actualizar = function() {
      var data = [
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
      })
    };

    $scope.update_k_general = function(){
      var data = [
        {
          "cuenta_id": $rootScope.id_cuenta,
          "configuracion":
          {
            "estilo_kiosco_logo_animar":    $scope.configuraciones[0]['estilo_kiosco_logo_animar'],
            "estilo_kiosco_kiosco_animar":  $scope.configuraciones[0]['estilo_kiosco_kiosco_animar'],
            "estilo_kiosco_flecha_animar":  $scope.configuraciones[0]['estilo_kiosco_flecha_animar'],
            "estilo_kiosco_logo_visible":   $scope.configuraciones[0]['estilo_kiosco_logo_visible'],
            "estilo_kiosco_kiosco_visible": $scope.configuraciones[0]['estilo_kiosco_kiosco_visible'],
            "estilo_kiosco_flecha_visible": $scope.configuraciones[0]['estilo_kiosco_flecha_visible'],
            "estilo_kiosco_fondo_visible":  $scope.configuraciones[0]['estilo_kiosco_fondo_visible'],
          }
        }
      ];
      Configuracion.post(data,function(data){
        console.log(data);
      })
    };

    $scope.update_k_textos = function(){
      var data = [
        {
          "cuenta_id": $rootScope.id_cuenta,
          "configuracion":
          {
            "estilo_kiosco_linea1_texto":     $scope.configuraciones[0]['estilo_kiosco_linea1_texto'],
            "estilo_kiosco_linea1_color":     $scope.configuraciones[0]['estilo_kiosco_linea1_color'],
            "estilo_kiosco_linea1_visible":   $scope.configuraciones[0]['estilo_kiosco_linea1_visible'],
            "estilo_kiosco_linea2_texto":     $scope.configuraciones[0]['estilo_kiosco_linea2_texto'],
            "estilo_kiosco_linea2_color":     $scope.configuraciones[0]['estilo_kiosco_linea2_color'],
            "estilo_kiosco_linea2_visible":   $scope.configuraciones[0]['estilo_kiosco_linea2_visible'],
            "estilo_kiosco_linea3_texto":     $scope.configuraciones[0]['estilo_kiosco_linea3_texto'],
            "estilo_kiosco_linea3_color":     $scope.configuraciones[0]['estilo_kiosco_linea3_color'],
            "estilo_kiosco_linea3_visible":   $scope.configuraciones[0]['estilo_kiosco_linea3_visible'],
            "estilo_kiosco_linea4_texto":     $scope.configuraciones[0]['estilo_kiosco_linea4_texto'],
            "estilo_kiosco_linea4_color":     $scope.configuraciones[0]['estilo_kiosco_linea4_color'],
            "estilo_kiosco_linea4_visible":   $scope.configuraciones[0]['estilo_kiosco_linea4_visible'],
            "estilo_kiosco_linea5_texto":     $scope.configuraciones[0]['estilo_kiosco_linea5_texto'],
            "estilo_kiosco_linea5_color":     $scope.configuraciones[0]['estilo_kiosco_linea5_color'],
            "estilo_kiosco_linea5_visible":   $scope.configuraciones[0]['estilo_kiosco_linea5_visible'],
            "estilo_kiosco_origen_x":         $scope.configuraciones[0]['estilo_kiosco_origen_x'],
            "estilo_kiosco_origen_y":         $scope.configuraciones[0]['estilo_kiosco_origen_y'],
            "estilo_kiosco_mostrar_guion":    $scope.configuraciones[0]['estilo_kiosco_mostrar_guion'],
            "estilo_kiosco_animar":           $scope.configuraciones[0]['estilo_kiosco_animar'],
          }
        }
      ];
      Configuracion.post(data,function(data){
        console.log(data);
      })
    };

    $scope.update_k_botones = function(){
      var data = [
        {
          "cuenta_id": $rootScope.id_cuenta,
          "configuracion":
          {
            "estilo_kiosco_boton_condocumento_visible":       $scope.configuraciones[0]['estilo_kiosco_boton_condocumento_visible'],
            "estilo_kiosco_boton_condocumento_color":         $scope.configuraciones[0]['estilo_kiosco_boton_condocumento_color'],
            "estilo_kiosco_boton_condocumento_texto_color":   $scope.configuraciones[0]['estilo_kiosco_boton_condocumento_texto_color'],
            "estilo_kiosco_boton_condocumento_texto_linea1":  $scope.configuraciones[0]['estilo_kiosco_boton_condocumento_texto_linea1'],
            "estilo_kiosco_boton_condocumento_texto_linea2":  $scope.configuraciones[0]['estilo_kiosco_boton_condocumento_texto_linea2'],
            "estilo_kiosco_boton_sindocumento_visible":       $scope.configuraciones[0]['estilo_kiosco_boton_sindocumento_visible'],
            "estilo_kiosco_boton_sindocumento_color":         $scope.configuraciones[0]['estilo_kiosco_boton_sindocumento_color'],
            "estilo_kiosco_boton_sindocumento_texto_color":   $scope.configuraciones[0]['estilo_kiosco_boton_sindocumento_texto_color'],
            "estilo_kiosco_boton_sindocumento_texto_linea1":  $scope.configuraciones[0]['estilo_kiosco_boton_sindocumento_texto_linea1'],
            "estilo_kiosco_boton_sindocumento_texto_linea2":  $scope.configuraciones[0]['estilo_kiosco_boton_sindocumento_texto_linea2'],
          }
        }
      ];
      Configuracion.post(data,function(data){
        console.log(data);
      })
    };

    $scope.update_k_menu = function(){
      var data = [
        {
          "cuenta_id": $rootScope.id_cuenta,
          "configuracion":
          {
            "estilo_kiosco_menu_fondo_visible":           $scope.configuraciones[0]['estilo_kiosco_menu_fondo_visible'],
            "estilo_kiosco_menu_transparencia_activar":   $scope.configuraciones[0]['estilo_kiosco_menu_transparencia_activar'],
            "estilo_kiosco_menu_transparencia_porcentaje":$scope.configuraciones[0]['estilo_kiosco_menu_transparencia_porcentaje'],
            "estilo_kiosco_menu_reemplazar_activar":      $scope.configuraciones[0]['estilo_kiosco_menu_reemplazar_activar'],
            "estilo_kiosco_menu_reemplazar_color":        $scope.configuraciones[0]['estilo_kiosco_menu_reemplazar_color'],
            "estilo_kiosco_menu_delineado_activar":       $scope.configuraciones[0]['estilo_kiosco_menu_delineado_activar'],
            "estilo_kiosco_menu_delineado_color":         $scope.configuraciones[0]['estilo_kiosco_menu_delineado_color'],
          }
        }
      ];
      Configuracion.post(data,function(data){
        console.log(data);
      })
    };

    $scope.update_v_colores = function(){
      var data = [
        {
          "cuenta_id": $rootScope.id_cuenta,
          "configuracion":
          {
            "estilo_video_fondo_color":   $scope.configuraciones[0]['estilo_video_fondo_color'],
            "estilo_video_turno_color":   $scope.configuraciones[0]['estilo_video_turno_color'],
            "estilo_video_lugar_color":   $scope.configuraciones[0]['estilo_video_lugar_color'],
          }
        }
      ];
      Configuracion.post(data,function(data){
        console.log(data);
      })
    };

    $scope.update_v_generales = function(){
      var data = [
        {
          "cuenta_id": $rootScope.id_cuenta,
          "configuracion":
          {
            "estilo_video_formato":   $scope.configuraciones[0]['estilo_video_formato'],
            "estilo_video_sonido":    $scope.configuraciones[0]['estilo_video_sonido'],
          }
        }
      ];
      Configuracion.post(data,function(data){
        console.log(data);
      })
    };

    $scope.update_m_generales = function(){
      var data = [
        {
          "cuenta_id": $rootScope.id_cuenta,
          "configuracion":
          {
            "estilo_movil_fondo_color":   $scope.configuraciones[0]['estilo_movil_fondo_color'],
            "estilo_movil_linea1_texto":  $scope.configuraciones[0]['estilo_movil_linea1_texto'],
            "estilo_movil_linea2_texto":  $scope.configuraciones[0]['estilo_movil_linea2_texto'],
          }
        }
      ];
      Configuracion.post(data,function(data){
        console.log(data);
      })
    };

  }]);

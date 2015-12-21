'use strict';

/**
 * @ngdoc overview
 * @name sistemaApp
 * @description
 * # sistemaApp
 *
 * Main module of the application.
 */
 angular
 .module('Asura', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'minicolors',
  'ngFileUpload'
  ])
 .constant('URL',{ 
  'path' : 'http://api.asura.piensamasalla.com/' 
})
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
  /* Configuración */
  .when("/configurar",{
    templateUrl:  "views/configuracion/index.html"
  })
  .when("/configurar/roles",{
    controller:   "RolesCtrl",
    templateUrl:  "views/configuracion/roles.html"
  })
  .when("/configurar/usuarios",{
    controller:   "UsuariosCtrl",
    templateUrl:  "views/configuracion/usuarios.html"
  })
  .when("/configurar/logicakioscos",{
    controller:   "LogicakioscosCtrl",
    templateUrl:  "views/configuracion/logicakioscos.html"
  })
  /* ZONA DE ESTILOS */
  .when("/configurar/estilos",{
    controller:   "EstilosCtrl",
    templateUrl:  "views/configuracion/estilos.html"
  })
  .when("/configurar/estilos/:estilo",{
    controller:   "EstilosCtrl",
    templateUrl:  "views/configuracion/estilos.html"
  })
  .when("/configurar/estilos/:estilo/:kiosco",{
          //controller:   "estilos_kiosco_Ctrl",
          templateUrl:  "views/configuracion/estilos.html"
        })
  /***********************/
  .when("/configurar/seguridad",{
    controller:   "SeguridadCtrl",
    templateUrl:  "views/configuracion/seguridad.html"
  })
  .when("/configurar/peticiones",{
    controller:   "PeticionesCtrl",
    templateUrl:  "views/configuracion/peticiones.html"
  })
  /* Planificación */
  .when("/planificacion",{
    templateUrl:  "views/planificacion/index.html"
  })
  .when("/planificacion/locales",{
    controller:   "LocalesCtrl",
    templateUrl:  "views/planificacion/locales.html"
  })
  .when("/planificacion/jerarquia",{
    controller:   "JerarquiaCtrl",
    templateUrl:  "views/planificacion/jerarquia.html"
  })
  .when("/planificacion/jerarquia/:jerarquia",{
    controller:   "JerarquiaCtrl",
    templateUrl:  "views/planificacion/jerarquia.html"
  })
  /***********************/
  .when("/planificacion/gatencion",{
    controller:   "GatencionCtrl",
    templateUrl:  "views/planificacion/gatencion.html"
  })
  .when("/planificacion/logica",{
    controller:   "LogicaCtrl",
    templateUrl:  "views/planificacion/logica.html"
  })
  /* Video */
  .when("/video",{
    templateUrl:  "views/video/index.html"
  })
  .when("/video/playlist",{
    controller:   "PlaylistCtrl",
    templateUrl:  "views/video/playlist.html"
  })
  /* Atención */
  .when("/atencion",{
    templateUrl:  "views/atencion/index.html"
  })
  .when("/atencion/mod_atencion2",{
    controller:   "ModAtencion2Ctrl",
    templateUrl:  "views/atencion/mod_atencion2.html"
  })
  .when("/atencion/supervision",{
    controller:   "SupervisionCtrl",
    templateUrl:  "views/atencion/supervision.html"
  })
  .when("/atencion/crit_atencion",{
    controller:   "CritAtencionCtrl",
    templateUrl:  "views/atencion/crit_atencion.html"
  })
  .when("/atencion/msj_alerta",{
    controller:   "MsjAlertaCtrl",
    templateUrl:  "views/atencion/msj_alerta.html"
  })
  /* Reportes */
  .when("/reportes",{
    templateUrl:  "views/reportes/index.html"
  })
  .when("/reportes/clt_atendidos",{
    controller:   "CltAtendidosCtrl",
    templateUrl:  "views/reportes/clt_atendidos.html"
  })
  .otherwise({
    redirectTo: '/'
  });
});

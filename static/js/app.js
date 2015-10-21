angular.module('Sistema')

.controller("homeController",function($scope, $http, $routeParams){
})
/* Configuración */
.controller("configurarController",function($scope, $http, $routeParams){
})
.controller("rolesController",function($scope, $http, $routeParams){
})
.controller("usuariosController",function($scope, $http, $routeParams){
})
.controller("logicakioscosController",function($scope, $http, $routeParams){
})
.controller("estilosController",function($scope, $http, $routeParams){
})
.controller("seguridadController",function($scope, $http, $routeParams){
})
.controller("peticionesController",function($scope, $http, $routeParams){
})
/* Planificación */
.controller("planificacionController",function($scope, $http, $routeParams){
})
.controller("localesController",function($scope, $http, $routeParams){
})
.controller("jerarquiaController",function($scope, $http, $routeParams){
})
.controller("gatencionController",function($scope, $http, $routeParams){
})
.controller("logicaController",function($scope, $http, $routeParams){
})
/* Video */
.controller("videoController",function($scope, $http, $routeParams){
})
.controller("playlistController",function($scope, $http, $routeParams){
})
/* Atención */
.controller("atencionController",function($scope, $http, $routeParams){
})
.controller("mod_atencion2Controller",function($scope, $http, $routeParams){
})
.controller("supervisionController",function($scope, $http, $routeParams){
})
.controller("crit_atencionController",function($scope, $http, $routeParams){
})
.controller("msj_alertaController",function($scope, $http, $routeParams){
})
/* Reporte */
.controller("reportesController",function($scope, $http, $routeParams){
})
.controller("clt_atendidosController",function($scope, $http, $routeParams){
});

/* Llamando pestañas en jerarquia.html */
function cambiarPestanna(pestannas,pestanna) {
    // Obtiene los elementos con los identificadores pasados.
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestannas.id);
    
    // Obtiene las divisiones que tienen el contenido de las pestañas.
    cpestanna = document.getElementById('c'+pestanna.id);
    listacPestannas = document.getElementById('contenido'+pestannas.id);
    
    i=0;
    // Recorre la lista ocultando todas las pestañas y restaurando el fondo 
    // y el padding de las pestañas.
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
        });
        i += 1;
    }

    $(document).ready(function(){
        // Muestra el contenido de la pestaña pasada como parametro a la funcion,
        // cambia el color de la pestaña y aumenta el padding para que tape el  
        // borde superior del contenido que esta juesto debajo y se vea de este 
        // modo que esta seleccionada.
        $(cpestanna).css('display','');
        $(pestanna).css('background','#fff');
    });

}
angular.module('AsuraQueue')

.controller('AsuraController',['$scope','$resource',function($s, $r){
    Get_roles = $r('http://api.asura.piensamasalla.com/roles/cuenta/1');
    $s.roles = Get_roles.query();
}])
/* Configuración */
.controller("rolesController",['$scope','$resource',function($s, $r){
    console.log($s.$parent.roles);
}])
.controller("usuariosController",function($scope, $http, $routeParams){
})
.controller("logicakioscosController",function($scope, $http, $routeParams){
})
.controller("estilosController",function($scope, $http, $routeParams){
    if( $routeParams.estilo == "kioscos_generales"  ||
        $routeParams.estilo == "kioscos_textos"     ||
        $routeParams.estilo == "kioscos_botones"    ||
        $routeParams.estilo == "kioscos_menu"        ){
               
        $scope.estilo = "./templates/configuracion/estilos/kioscos.html";

    }
    if( $routeParams.estilo == "videos_generales"   ||
        $routeParams.estilo == "videos_colores"     ){
               
        $scope.estilo = "./templates/configuracion/estilos/videos.html";

    }

    switch($routeParams.estilo){
        case "consola":
            $scope.estilo = "./templates/configuracion/estilos/consola.html";
            break;
        /* KIOSCOS */
        case "kioscos_generales":
            $scope.img_estilos_kioscos  = './static/img/img_generales.png';
            $scope.estilos_kiosco       = './templates/configuracion/estilos/kioscos/generales.html';
            break;
        case "kioscos_textos":
            $scope.img_estilos_kioscos  = './static/img/img_generales.png';
            $scope.estilos_kiosco       = './templates/configuracion/estilos/kioscos/textos.html';
            break;
        case "kioscos_botones":
            $scope.img_estilos_kioscos  = './static/img/img_generales.png';
            $scope.estilos_kiosco       = './templates/configuracion/estilos/kioscos/botones.html';
            break;
        case "kioscos_menu":
            $scope.img_estilos_kioscos  = './static/img/img_kiosco.png';
            $scope.estilos_kiosco       = './templates/configuracion/estilos/kioscos/menu.html';
            break;
        /* VIDEOS */
        case "videos_generales":
            $scope.img_estilos_kioscos  = './static/img/img_presentacion.png';
            $scope.estilos_video       = './templates/configuracion/estilos/videos/generales.html';
            break;
        case "videos_colores":
            $scope.img_estilos_kioscos  = './static/img/img_presentacion.png';
            $scope.estilos_video       = './templates/configuracion/estilos/videos/colores.html';
            break;
        /* MOVILES */
        case "moviles":
            $scope.estilo = "./templates/configuracion/estilos/moviles.html";
            break;
    }
})
.controller("seguridadController",function($scope, $http, $routeParams){
})
.controller("peticionesController",function($scope, $http, $routeParams){
})
/* Planificación */
.controller("localesController",function($scope, $http, $routeParams){
})
.controller("jerarquiaController",function($scope, $http, $routeParams){
    //$scope.hola = "hola mundo soy daniel";
    $scope.planificacion_jerarquia ='./templates/planificacion/jerarquias/clientes.html';
    
    switch($routeParams.jerarquia){
        case "jerarquias":
            $scope.planificacion_jerarquia ='./templates/planificacion/jerarquias/jerarquias.html';
            break;
        case "importar":
            $scope.planificacion_jerarquia ='./templates/planificacion/jerarquias/importar.html';
            break;
    }
    console.log($routeParams);
})
.controller("gatencionController",function($scope, $http, $routeParams){
})
.controller("logicaController",function($scope, $http, $routeParams){
})
/* Video */
.controller("playlistController",function($scope, $http, $routeParams){
})
/* Atención */
.controller("mod_atencion2Controller",function($scope, $http, $routeParams){
})
.controller("supervisionController",function($scope, $http, $routeParams){
})
.controller("crit_atencionController",function($scope, $http, $routeParams){
})
.controller("msj_alertaController",function($scope, $http, $routeParams){
})
/* Reporte */
.controller("clt_atendidosController",function($scope, $http, $routeParams){
});
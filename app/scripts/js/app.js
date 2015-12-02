angular.module('AsuraQueue')

.controller('AsuraController',['$scope','$resource',function($s, $r){
    Get_roles = $r('http://api.asura.piensamasalla.com/roles/cuenta/1');
    $s.roles = Get_roles.query();
}])

.controller("homeController",['$scope','$resource',function($s, $r){
    elem_a                  = angular.element(".circle a");
    elem_conte              = angular.element(".contenedor_sidebar");
    elem_cuerpo             = angular.element(".cuerpo");
    elem_cuerpo_pagina      = angular.element(".cuerpo_pagina");
    elem_sidebar            = angular.element(".sub_sidebar");
    elem_sidebar_left       = angular.element("#sidebar_left");
    $(elem_a).click(function(e) {
        elem_cuerpo.removeClass("col-lg-12 col-md-12");
        elem_cuerpo_pagina.removeClass('col-lg-7 col-md-9 col-lg-offset-3 col-md-offset-3 col-md-offset-2');
        elem_sidebar_left.find('a').removeClass('active2');
        elem_sidebar.find('a').removeClass('active');
        elem_sidebar.find('ul').removeClass('active block_imp');

        elem_conte.addClass("block_imp");
        elem_cuerpo.addClass("col-lg-10 col-md-9 col-lg-offset-2 col-md-offset-3");
        elem_cuerpo_pagina.addClass('col-lg-12 col-md-12');
        console.log($(this).attr('href'));
        elem_sidebar_left.find('a[href="'+ $(this).attr('href') +'"]').addClass('active2');
        elem_sidebar.find('a[href="'+ $(this).attr('href') +'"]').addClass('active');
        elem_sidebar.find('a[href="'+ $(this).attr('href') +'"]').parents('ul').addClass('active block_imp');
    });
}])

/* Configuración */
.controller("rolesController",['$scope','$http', '$resource',function($s, $h, $r){
    //console.log($s.$parent.roles);
    add_mostrar         = angular.element(".mostrar_flotante");
    slide_flotante      = angular.element(".slide_flotante");
    close               = angular.element(".close");
    rol_nombre          = angular.element("#rol_nombre");

    add_mostrar.click(function(e){
        slide_flotante.removeClass('none');
    });
    close.click(function(e){
        slide_flotante.addClass('none');
    });

    $s.GetRol = function(rol_id){
        slide_flotante.removeClass('none');
        Get_Rol = $r('http://api.asura.piensamasalla.com/roles/'+ rol_id);
        rol_nombre.removeAttr('disabled');
        if(rol_id <=6){
            rol_nombre.attr('disabled', 'disabled');
        }
        $s.a_Get_Rol = Get_Rol.query();
    };

    $s.EliminarRol = function(rol_id){
        Rol = $r('http://api.asura.piensamasalla.com/roles/:id',
            {id: '@id'},{
                remove:{ method: 'DELETE'}
            });
        var dato = Rol.remove({id: 14});
        console.log(dato);
    };

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
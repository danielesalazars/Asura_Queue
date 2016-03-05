'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the Asura
 */
 angular.module('Asura')
 .controller('HomeCtrl',['$scope',function ($scope) {
    var elem_a                  = angular.element(".circle a");
    var elem_conte              = angular.element(".contenedor_sidebar");
    var elem_cuerpo             = angular.element(".cuerpo");
    var elem_cuerpo_pagina      = angular.element(".cuerpo_pagina");
    var elem_sidebar            = angular.element(".sub_sidebar");
    var elem_sidebar_left       = angular.element("#sidebar_left");
    $(elem_a).click(function(e) {
        elem_cuerpo.removeClass("col-lg-12 col-md-12");
        elem_cuerpo_pagina.removeClass('col-lg-7 col-md-9 col-lg-offset-3 col-md-offset-3 col-md-offset-2');
        elem_sidebar_left.find('a').removeClass('active2');
        elem_sidebar.find('a').removeClass('active');
        elem_sidebar.find('ul').removeClass('active block_imp');

        elem_conte.addClass("block_imp");
        elem_cuerpo.addClass("col-lg-10 col-md-9 col-lg-offset-2 col-md-offset-3");
        elem_cuerpo_pagina.addClass('col-lg-12 col-md-12');
        elem_sidebar_left.find('a[href="'+ $(this).attr('href') +'"]').addClass('active2');
        elem_sidebar.find('a[href="'+ $(this).attr('href') +'"]').addClass('active');
        elem_sidebar.find('a[href="'+ $(this).attr('href') +'"]').parents('ul').addClass('active block_imp');
    });


}]);
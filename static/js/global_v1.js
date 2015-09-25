$(document).ready(function(){

	activar_sub_menu("#sidebar_01 a","#navegacion_01");
	activar_sub_menu("#sidebar_02 a","#navegacion_02");
	activar_sub_menu("#sidebar_03 a","#navegacion_03");
	activar_sub_menu("#sidebar_04 a","#navegacion_04");
	activar_sub_menu("#sidebar_05 a","#navegacion_05");

	$(".sidebar a").on("mouseover",function(){

		$(".cuerpo").removeClass("col-lg-12 col-md-12");
		$(".cuerpo").addClass("col-lg-9 col-md-9 col-lg-offset-2 col-md-offset-3");

		$(".cuerpo_pagina").removeClass('col-lg-6 col-md-9 col-lg-offset-3 col-md-offset-2');
		$(".cuerpo_pagina").addClass('col-lg-8 col-md-12 col-lg-offset-2');

		$(".contenedor_sidebar").addClass("block");
		$(".subir").addClass("subir_active");

	});


	$("#sidebar_01 a, #navegacion_01 a").on("click",function(){
		$(this).addClass("active2");
		$("#navegacion_01").addClass("block2");
	});


	$(".cuerpo, .menu_superior").on("mouseover",function(){

		$(".cuerpo").removeClass("col-lg-9 col-md-9 col-lg-offset-2 col-md-offset-3");
		$(".cuerpo").addClass("col-lg-12 col-md-12");

		$(".cuerpo_pagina").removeClass('col-lg-8 col-md-12 col-lg-offset-2');
		$(".cuerpo_pagina").addClass('col-lg-6 col-md-9 col-lg-offset-3 col-md-offset-2');

		$(".contenedor_sidebar").removeClass("block");
		$(".subir").removeClass("subir_active");
	});

});

function activar_sub_menu(item_nav,sub_item_nav){
	$(item_nav).on("click mouseover",function(){
		$(".nav-sidebar a").removeClass("active");
		$(".sub_sidebar ul").removeClass("block");
		$(this).addClass("active");
		$(sub_item_nav).addClass("block");
	});
}






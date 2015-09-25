$(document).ready(function(){

	activar_sub_menu("#sidebar_01 a","#navegacion_01");
	activar_sub_menu("#sidebar_02 a","#navegacion_02");
	activar_sub_menu("#sidebar_03 a","#navegacion_03");
	activar_sub_menu("#sidebar_04 a","#navegacion_04");
	activar_sub_menu("#sidebar_05 a","#navegacion_05");

	change_sub_menu();

	activar_menu_selected();
	/*$(".cuerpo, .menu_superior").on("mouseover",function(){

		$(".cuerpo").removeClass("col-lg-9 col-md-9 col-lg-offset-2 col-md-offset-3");
		$(".cuerpo").addClass("col-lg-12 col-md-12");

		$(".cuerpo_pagina").removeClass('col-lg-8 col-md-12 col-lg-offset-2');
		$(".cuerpo_pagina").addClass('col-lg-6 col-md-9 col-lg-offset-3 col-md-offset-2');

		$(".contenedor_sidebar").removeClass("block_imp");
		$(".subir").removeClass("subir_active");
	});*/

});

function activar_sub_menu(item_nav,sub_item_nav){
	$(item_nav).on("mouseover",function(){
		$("#sidebar_left ul a").removeClass("active");
		$(".sub_sidebar ul").removeClass("block_imp");
		$(this).addClass("active");
		$(sub_item_nav).addClass("block_imp");
	});
	
	$(sub_item_nav+" a").on("click",function(){
		$(".sub_sidebar ul,.sub_sidebar a").removeClass("active");
		$("#sidebar_left a").removeClass("active2");
		$(sub_item_nav).addClass("active");
		$(this).addClass('active');
		$(item_nav).addClass('active2');
	});
}

function change_sub_menu(){
	$("#sidebar_left ul a, .sub_sidebar ul a").on("mouseover",function(){

		$(".cuerpo").removeClass("col-lg-12 col-md-12");
		$(".cuerpo").addClass("col-lg-9 col-md-9 col-lg-offset-2 col-md-offset-3");

		$(".cuerpo_pagina").removeClass('col-lg-6 col-md-9 col-lg-offset-3 col-md-offset-2');
		$(".cuerpo_pagina").addClass('col-lg-8 col-md-12 col-lg-offset-2');

		$(".contenedor_sidebar").addClass("block_imp");
		$(".subir").addClass("subir_active");

	});
}

function activar_menu_selected(){
	$("#sidebar_hidden").mouseover(function(e) {
		var longitud = $(".sub_sidebar ul");
		if($(".sub_sidebar a.active").length){
			$(".sub_sidebar ul").removeClass('block_imp');
		}
		$(".sub_sidebar ul.active").addClass('block_imp');
	});
}
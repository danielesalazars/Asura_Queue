$(document).ready(function(){

	activar_sub_menu("#sidebar_01 a","#navegacion_01");
	activar_sub_menu("#sidebar_02 a","#navegacion_02");
	activar_sub_menu("#sidebar_03 a","#navegacion_03");
	activar_sub_menu("#sidebar_04 a","#navegacion_04");
	activar_sub_menu("#sidebar_05 a","#navegacion_05");

	change_sub_menu();

	activar_menu_selected();

	if(window.location.hash === "#/" || window.location.hash == ""){
		activa_home();
	}else{
		var item_sidebar = $(".sub_sidebar a[href='"+ window.location.hash +"']");

		$("#"+item_sidebar.attr('class')+" a").addClass('active active2');
		item_sidebar.parents("ul").addClass('block_imp active');
		item_sidebar.addClass('active');

		$(".contenedor_sidebar").removeClass('none');
		$(".subir").addClass("subir_active");
	}

	$("#logo a").click(function(){
		$(".contenedor_sidebar").removeClass('block_imp');
		$("a").removeClass("active");
		activa_home();
	});
	
});

function activa_home(){
	$(".contenedor_sidebar").addClass('none');
	$(".cuerpo").removeClass("col-lg-10 col-md-9 col-lg-offset-2 col-md-offset-3");
	$(".cuerpo").addClass("col-lg-12 col-md-12");
	$(".cuerpo_pagina").removeClass('col-lg-12 col-md-12');
	$(".cuerpo_pagina").addClass('col-lg-7 col-md-9 col-lg-offset-3 col-md-offset-2');
	$(".subir").removeClass("subir_active");
}

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
		$(".cuerpo").addClass('col-lg-10 col-md-9 col-lg-offset-2 col-md-offset-3');
		$(".cuerpo_pagina").removeClass('col-lg-7 col-md-9 col-lg-offset-3 col-md-offset-3');
		$(".cuerpo_pagina").addClass('col-lg-12 col-md-12');
		$(sub_item_nav).addClass("active");
		$(this).addClass('active');
		$(item_nav).addClass('active2');
	});
}

function change_sub_menu(){
	$("#sidebar_left ul a, .sub_sidebar ul a").on("mouseover",function(){
		if(window.location.hash == "#/"){
			$(".cuerpo_pagina").removeClass('col-md-offset-2');
			$(".cuerpo_pagina").addClass('col-md-offset-3');
		}else{
			$(".cuerpo").removeClass("col-lg-12 col-md-12");
			$(".cuerpo").addClass("col-lg-10 col-md-9 col-lg-offset-2 col-md-offset-3");
			$(".cuerpo_pagina").removeClass('col-lg-7 col-md-9 col-lg-offset-3 col-md-offset-2');
			$(".cuerpo_pagina").removeClass('col-md-offset-3');
			$(".cuerpo_pagina").addClass('col-lg-12 col-md-12');
		}

		$(".contenedor_sidebar").addClass("block_imp");
		$(".subir").addClass("subir_active");

	});
}

function activar_menu_selected(){
	$("#sidebar_hidden, .cuerpo, .menu_superior").mouseover(function(e) {
		if(window.location.hash === "#/"){
			activa_home();
			$("#sidebar_left a.active").removeClass("active");
			$(".contenedor_sidebar").removeClass('block_imp');
		}else{
			var longitud = $(".sub_sidebar ul");
			if($(".sub_sidebar a.active").length){
				$(".sub_sidebar ul").removeClass('block_imp');
				$("#sidebar_left a.active").removeClass("active");
			}
			$(".sub_sidebar ul.active").addClass('block_imp');
		}
	});
}
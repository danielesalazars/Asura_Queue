'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:CltAtendidosCtrl
 * @description
 * # CltAtendidosCtrl
 * Controller of the Asura
 */
 angular.module('Asura')
 .controller('CltAtendidosCtrl', ['$scope', function ($scope) {
 	//array de tabla 
	var tExitosos = ["2643", "2545", "2672", "2704", "2681", "2524", "2693", "2590", "2635", "2784", "2774", "2805"];
	var tIncompletos = ["445", "365", "474", "421", "384", "390", "345", "350", "365", "341", "326", "315"];
	var tVencidos = ["152", "168", "123", "135", "150", "138", "145", "126", "122", "132", "118", "112"];
	var lineChartData = {
		labels : ["May2015","Jun2015","Jul2015","Ago2016","Sep2016","Oct2015","Nov2015","Dic2015","Ene2016","Feb2016","Mar2016","Abr2016"],
		datasets : [
			{
				label: "Turnos exitosos",
				fillColor : "rgba(151,187,205,0.15)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : tExitosos
			},
			{
				label: "Turnos incompletos",
				fillColor : "rgba(225,174,108,0.15)",
				strokeColor : "rgba(225,174,108,1)",
				pointColor : "rgba(225,174,108,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(225,174,108,1)",
				data : tIncompletos
			},
			{
				label: "Turnos vencidos",
				fillColor : "rgba(225,119,119,0.15)",
				strokeColor : "rgba(225,119,119,1)",
				pointColor : "rgba(225,119,119,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(225,119,119,1)",
				data : tVencidos
			}
		],
	}

	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true,

	});
}]);

'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:CltsalteadosCtrl
 * @description
 * # CltsalteadosCtrl
 * Controller of the Asura
 */
angular.module('Asura')
 .controller('CltsalteadosCtrl', ['$scope', function ($scope) {
 	var tKioscos = ["2234", "2124", "2172", "2176", "2075", "2128", "2061", "2014", "2056", "2014", "1995", "1976"];
	var tMoviles = ["185", "225", "220", "224", "280", "352", "345", "330", "385", "412", "421", "480"];
	var lineChartData = {
		labels : ["May2015","Jun2015","Jul2015","Ago2016","Sep2016","Oct2015","Nov2015","Dic2015","Ene2016","Feb2016","Mar2016","Abr2016"],
		datasets : [
			{
				label: "Turnos generados en kioscos",
				fillColor : "rgba(151,187,205,0.15)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : tKioscos
			},
			{
				label: "Turnos generados en app",
				fillColor : "rgba(225,174,108,0.15)",
				strokeColor : "rgba(225,174,108,1)",
				pointColor : "rgba(225,174,108,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(225,174,108,1)",
				data : tMoviles
			}
		]

	}
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
}]);

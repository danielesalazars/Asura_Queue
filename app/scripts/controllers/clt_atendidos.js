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
 	$scope.reportes = [
 		{
	 		color: '#8CC63E',
	 		nombre: 'Benavides',
	 		atendidos: 2586,
	 	},
 		{
	 		color: '#44aac3',
	 		nombre: 'Angamos',
	 		atendidos: 2341,
	 	},
 		{
	 		color: '#8f68d3',
	 		nombre: 'Javier Prado',
	 		atendidos: 2095,
	 	},
 		{
	 		color: '#bf63ce',
	 		nombre: 'El Polo',
	 		atendidos: 1946,
	 	},
 		{
	 		color: '#e07877',
	 		nombre: 'Caminos del Inca',
	 		atendidos: 1875,
	 	},
 		{
	 		color: '#e1af6a',
	 		nombre: 'Jockey',
	 		atendidos: 1674,
	 	},
 		{
	 		color: '#ede664',
	 		nombre: 'Camino Real',
	 		atendidos: 2540,
	 	},
	 ];

	$scope.chartObject = {};

    $scope.chartObject.type = "ColumnChart";

    var array_reporte = [];
    for (var i = 0; i < $scope.reportes.length; i++) {
    	var obj = {
    		c: [
	            {v: $scope.reportes[i]['nombre']},
	            {v: $scope.reportes[i]['atendidos']},
	            {v: $scope.reportes[i]['color']}
	        ]};
	    array_reporte.push(obj);
    };

    $scope.chartObject.data = {
    	"cols": [
	        {id: "t", label: "Local", type: "string"},
	        {id: "s", label: ["Clientes Atendidos"], type: "number"},
	        {role: 'style', type: 'string'}
	    ], "rows": array_reporte };

    $scope.chartObject.options = {
    	legend : 'none',
    	hAxis: {
    		textPosition: 'none',
    	},
        vAxis: {
        	gridlines : {
          		count : 3
        	}
      	}
    };


	// var chart1 = {};
	// chart1.type = "google.charts.Bar";
	// chart1.data = {
	// 	"cols": [
	// 		{id: "Clientes atendidos",label: "Month",type: "string"}, 
	// 		{id: "1",label: "Benavides",type: "number"}, 
	// 		{id: "2",label: "Angamos",type: "number"}, 
	// 		{id: "3",label: "Javier Prado",type: "number"}, 
	// 		{id: "4",label: "El Polo",type: "number"}
	// 	],
	// 	"rows": [{
	// 		c: [
	// 			{v: "Clientes Atendidos"}, 
	// 			{v: 19}, 
	// 			{v: 12},
	// 			{v: 7},
	// 			{v: 4}
	// 		]
	// 	},]
	// };

	// chart1.options = {
	// 	"legend": "none",
	// };

	// $scope.myChart = chart1;


}]);

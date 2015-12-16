'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:LogicaCtrl
 * @description
 * # LogicaCtrl
 * Controller of the Asura
 */
angular.module('Asura')
  .controller('LogicaCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


 [
  	{	
  		"id":1,
  		"created_at":"2015-11-03T09:55:39",
  		"updated_at":"2015-11-12T18:40:29",
  		"nombre":"Benavides",
  		"ventanillas":"1,2,3,4,5,6,7,8,9,10,11,12,A,B,C",
  		"kiosco_codigo":"BEN001",
  		"ubicacion":"5.1232;6.3323",
  		"es_publicado":true,
  		"cuenta_id":1,
  		"ownVentanilla":
  			[
  				{	
  					"id":75,
  					"nombre":"1",
  					"orden":0,
  					"sharedGrupoatencion":
  						[	
  							{	
  								"id":1,
  								"created_at":"2015-11-11T10:28:58",
  								"updated_at":"2015-11-11T11:36:38",
  								"nombre":"Información",
  								"inicial":"I",
  								"color":"#ffffff"
  							}
  						],
  					"sharedJerarquia":
  						[	
  							{
  								"id":1,
  								"created_at":"2015-11-11T09:04:08",
  								"updated_at":"2015-11-11T11:40:39",
  								"nombre":"No clientes"
  							}
  						]
  				},
  				{	
  					"id":76,
  					"nombre":"2",
  					"orden":1,
  					"sharedGrupoatencion":
  						[
  							{	
  								"id":2,
  								"created_at":"2015-11-11T11:37:03",
  								"updated_at":"2015-11-11T11:37:03",
  								"nombre":"Trámites",
  								"inicial":"T",
  								"color":"#ffffff"
  							}	
  						],
  					"sharedJerarquia":
  						[
  							{
  								"id":2,
  								"created_at":"2015-11-11T09:10:33",
  								"updated_at":"2015-11-11T11:41:07",
  								"nombre":"Clientes preferentes"
  							}
  						]
  				},
  				{
  					"id":77,
  					"nombre":"3",
  					"orden":2,
  					"sharedGrupoatencion":
  						[
  							{	
  								"id":3,
  								"created_at":"2015-11-11T11:38:27",
  								"updated_at":"2015-11-11T11:38:27",
  								"nombre":"Cobranzas",
  								"inicial":"C",
  								"color":"#ffffff"
  							}
  						],
  					"sharedJerarquia":
  						[	
  							{
  								"id":3,
  								"created_at":"2015-11-11T11:41:25",
  								"updated_at":"2015-11-11T11:41:25",
  								"nombre":"Clientes regulares"
  							}
  						]
  				},
  				{
  					"id":78,
  					"nombre":"4",
  					"orden":3,
  					"sharedGrupoatencion":
  						[
  							{
  								"id":4,
  								"created_at":"2015-11-11T11:38:27",
  								"updated_at":"2015-11-11T11:38:27",
  								"nombre":"Mesa de partes",
  								"inicial":"M",
  								"color":"#ffffff"}],
  					"sharedJerarquia":
  						[	
  							{	
  								"id":1,
  								"created_at":"2015-11-11T09:04:08",
  								"updated_at":"2015-11-11T11:40:39",
  								"nombre":"No clientes"
  							}
  						]
  				},
  				{
  					"id":133,
  					"nombre":"5",
  					"orden":4,
  					"sharedGrupoatencion":
  						[
  							{	
  								"id":5,
  								"created_at":"2015-11-11T11:38:27",
  								"updated_at":"2015-11-11T11:38:27",
  								"nombre":"Atención",
  								"inicial":"A",
  								"color":"#ffffff"
  							}
  						],
  					"sharedJerarquia":
  						[
  							{
  								"id":2,"created_at":"2015-11-11T09:10:33","updated_at":"2015-11-11T11:41:07","nombre":"Clientes preferentes"}]},{"id":134,"nombre":"6","orden":5,"sharedGrupoatencion":[{"id":6,"created_at":"2015-11-11T11:38:27","updated_at":"2015-11-11T11:38:27","nombre":"Plataforma","inicial":"P","color":"#ffffff"}],"sharedJerarquia":[{"id":3,"created_at":"2015-11-11T11:41:25","updated_at":"2015-11-11T11:41:25","nombre":"Clientes regulares"}]},{"id":135,"nombre":"7","orden":6,"sharedGrupoatencion":[{"id":1,"created_at":"2015-11-11T10:28:58","updated_at":"2015-11-11T11:36:38","nombre":"Información","inicial":"I","color":"#ffffff"}],"sharedJerarquia":[{"id":1,"created_at":"2015-11-11T09:04:08","updated_at":"2015-11-11T11:40:39","nombre":"No clientes"}]},{"id":136,"nombre":"8","orden":7,"sharedGrupoatencion":[{"id":2,"created_at":"2015-11-11T11:37:03","updated_at":"2015-11-11T11:37:03","nombre":"Trámites","inicial":"T","color":"#ffffff"}],"sharedJerarquia":[{"id":2,"created_at":"2015-11-11T09:10:33","updated_at":"2015-11-11T11:41:07","nombre":"Clientes preferentes"}]},{"id":137,"nombre":"9","orden":8,"sharedGrupoatencion":[{"id":3,"created_at":"2015-11-11T11:38:27","updated_at":"2015-11-11T11:38:27","nombre":"Cobranzas","inicial":"C","color":"#ffffff"}],"sharedJerarquia":[{"id":3,"created_at":"2015-11-11T11:41:25","updated_at":"2015-11-11T11:41:25","nombre":"Clientes regulares"}]},{"id":138,"nombre":"10","orden":9,"sharedGrupoatencion":[{"id":4,"created_at":"2015-11-11T11:38:27","updated_at":"2015-11-11T11:38:27","nombre":"Mesa de partes","inicial":"M","color":"#ffffff"}],"sharedJerarquia":[{"id":1,"created_at":"2015-11-11T09:04:08","updated_at":"2015-11-11T11:40:39","nombre":"No clientes"}]},{"id":139,"nombre":"11","orden":10,"sharedGrupoatencion":[{"id":5,"created_at":"2015-11-11T11:38:27","updated_at":"2015-11-11T11:38:27","nombre":"Atención","inicial":"A","color":"#ffffff"}],"sharedJerarquia":[{"id":2,"created_at":"2015-11-11T09:10:33","updated_at":"2015-11-11T11:41:07","nombre":"Clientes preferentes"}]},{"id":140,"nombre":"12","orden":11,"sharedGrupoatencion":[{"id":6,"created_at":"2015-11-11T11:38:27","updated_at":"2015-11-11T11:38:27","nombre":"Plataforma","inicial":"P","color":"#ffffff"}],"sharedJerarquia":[{"id":3,"created_at":"2015-11-11T11:41:25","updated_at":"2015-11-11T11:41:25","nombre":"Clientes regulares"}]},{"id":141,"nombre":"A","orden":12,"sharedGrupoatencion":[{"id":1,"created_at":"2015-11-11T10:28:58","updated_at":"2015-11-11T11:36:38","nombre":"Información","inicial":"I","color":"#ffffff"}],"sharedJerarquia":[{"id":1,"created_at":"2015-11-11T09:04:08","updated_at":"2015-11-11T11:40:39","nombre":"No clientes"}]},{"id":142,"nombre":"B","orden":13,"sharedGrupoatencion":[{"id":2,"created_at":"2015-11-11T11:37:03","updated_at":"2015-11-11T11:37:03","nombre":"Trámites","inicial":"T","color":"#ffffff"}],"sharedJerarquia":[{"id":2,"created_at":"2015-11-11T09:10:33","updated_at":"2015-11-11T11:41:07","nombre":"Clientes preferentes"}]},{"id":143,"nombre":"C","orden":14,"sharedGrupoatencion":[{"id":3,"created_at":"2015-11-11T11:38:27","updated_at":"2015-11-11T11:38:27","nombre":"Cobranzas","inicial":"C","color":"#ffffff"}],"sharedJerarquia":[{"id":3,"created_at":"2015-11-11T11:41:25","updated_at":"2015-11-11T11:41:25","nombre":"Clientes regulares"}]}]}]

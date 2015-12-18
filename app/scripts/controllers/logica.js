'use strict';

/*
 * @ngdoc function
 * @name sistemaApp.controller:LogicaCtrl
 * @description
 * # LogicaCtrl
 * Controller of the sistemaApp
 */
 angular.module('Asura')
  .controller('LogicaCtrl',['$scope','$rootScope', function($scope, $rootScope) {
    //estado de slide derecho
    $scope.estado = false;  
    //creamos un objeto que <conte></conte>ndra los datos del formulario
    $scope.logica = [];
    //recuperamos el $resource de logica
    var Logica = $rootScope.main.logica;

    /*$scope.id_logica = 0;
     $scope.show_crear = function(){
      //asignar titulo cabecera al slide
      $scope.act_btn_crear  = true;
      $scope.act_btn_up     = !$scope.act_btn_crear;
        $scope.title_slide = 'Crear lógica';
        //asignar nombre al input
        $scope.logica.nombre = '';
        $scope.estado = true;
      }*/
    

    $scope.show_editar = function(_id){
      $scope.id_logica = _id;
      Logica.get({id: _id}, function(data){ //si es ok entra recien a la funcion
        $scope.act_btn_up     = !$scope.act_btn_crear;
        $scope.title_slide = 'Editar lógica';
        $scope.logica.nombre = data[0]["nombre"]; //siempre 0
        $scope.estado = true;
        console.log(data); //muestra el detalle del parametro
      })
      

    }

    /*$scope.crear = function(){
        var data =[ {
        'nombre': $scope.logica.nombre,
      }];
    

      Logica.post(null, data, function(){
        console.log (data);
        $rootScope.main.logicas.query({id: $rootScope.id_cuenta}, function(data){ 
          $scope.logicas = data;
          $scope.estado = !$scope.estado;
        });
      });
      }
*/
      $scope.actualizar = function(){
        var data = [
            {
            'nombre': $scope.logica.nombre
            }
        ];
      Logica.update({id: $scope.id_logica}, data,function(){
        $rootScope.main.logicas.query({id: $rootScope.id_cuenta}, function(data){
          $scope.logicas = data;
          $scope.estado = !$scope.estado;
        });
      });
      }

      /*$scope.eliminar = function(_id){
        Logica.delete({id: _id},function(){
        $rootScope.main.logicas.query({id: $rootScope.id_cuenta}, function(data){
          $scope.logicas = data;
        });
        })
      }*/

      $scope.close = function(){
        $scope.estado = !$scope.estado;
      }

  }]);


/*[
  {
    "id": 1,
    "created_at": "2015-11-03T09:55:39",
    "updated_at": "2015-11-12T18:40:29",
    "nombre": "Benavides",
    "ventanillas": "1,2,3,4,5,6,7,8,9,10,11,12,A,B,C",
    "kiosco_codigo": "BEN001",
    "ubicacion": "5.1232;6.3323",
    "es_publicado": true,
    "cuenta_id": 1,
    "ownVentanilla": [
      {
        "id": 75,
        "nombre": "1",
        "orden": 0,
        "sharedGrupoatencion": [
          {
            "id": 1,
            "created_at": "2015-11-11T10:28:58",
            "updated_at": "2015-11-11T11:36:38",
            "nombre": "Informaci\u00f3n",
            "inicial": "I",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 1,
            "created_at": "2015-11-11T09:04:08",
            "updated_at": "2015-11-11T11:40:39",
            "nombre": "No clientes"
          }
        ]
      },
      {
        "id": 76,
        "nombre": "2",
        "orden": 1,
        "sharedGrupoatencion": [
          {
            "id": 2,
            "created_at": "2015-11-11T11:37:03",
            "updated_at": "2015-11-11T11:37:03",
            "nombre": "Tr\u00e1mites",
            "inicial": "T",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 2,
            "created_at": "2015-11-11T09:10:33",
            "updated_at": "2015-11-11T11:41:07",
            "nombre": "Clientes preferentes"
          }
        ]
      },
      {
        "id": 77,
        "nombre": "3",
        "orden": 2,
        "sharedGrupoatencion": [
          {
            "id": 3,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Cobranzas",
            "inicial": "C",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 3,
            "created_at": "2015-11-11T11:41:25",
            "updated_at": "2015-11-11T11:41:25",
            "nombre": "Clientes regulares"
          }
        ]
      },
      {
        "id": 78,
        "nombre": "4",
        "orden": 3,
        "sharedGrupoatencion": [
          {
            "id": 4,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Mesa de partes",
            "inicial": "M",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 1,
            "created_at": "2015-11-11T09:04:08",
            "updated_at": "2015-11-11T11:40:39",
            "nombre": "No clientes"
          }
        ]
      },
      {
        "id": 133,
        "nombre": "5",
        "orden": 4,
        "sharedGrupoatencion": [
          {
            "id": 5,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Atenci\u00f3n",
            "inicial": "A",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 2,
            "created_at": "2015-11-11T09:10:33",
            "updated_at": "2015-11-11T11:41:07",
            "nombre": "Clientes preferentes"
          }
        ]
      },
      {
        "id": 134,
        "nombre": "6",
        "orden": 5,
        "sharedGrupoatencion": [
          {
            "id": 6,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Plataforma",
            "inicial": "P",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 3,
            "created_at": "2015-11-11T11:41:25",
            "updated_at": "2015-11-11T11:41:25",
            "nombre": "Clientes regulares"
          }
        ]
      },
      {
        "id": 135,
        "nombre": "7",
        "orden": 6,
        "sharedGrupoatencion": [
          {
            "id": 1,
            "created_at": "2015-11-11T10:28:58",
            "updated_at": "2015-11-11T11:36:38",
            "nombre": "Informaci\u00f3n",
            "inicial": "I",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 1,
            "created_at": "2015-11-11T09:04:08",
            "updated_at": "2015-11-11T11:40:39",
            "nombre": "No clientes"
          }
        ]
      },
      {
        "id": 136,
        "nombre": "8",
        "orden": 7,
        "sharedGrupoatencion": [
          {
            "id": 2,
            "created_at": "2015-11-11T11:37:03",
            "updated_at": "2015-11-11T11:37:03",
            "nombre": "Tr\u00e1mites",
            "inicial": "T",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 2,
            "created_at": "2015-11-11T09:10:33",
            "updated_at": "2015-11-11T11:41:07",
            "nombre": "Clientes preferentes"
          }
        ]
      },
      {
        "id": 137,
        "nombre": "9",
        "orden": 8,
        "sharedGrupoatencion": [
          {
            "id": 3,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Cobranzas",
            "inicial": "C",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 3,
            "created_at": "2015-11-11T11:41:25",
            "updated_at": "2015-11-11T11:41:25",
            "nombre": "Clientes regulares"
          }
        ]
      },
      {
        "id": 138,
        "nombre": "10",
        "orden": 9,
        "sharedGrupoatencion": [
          {
            "id": 4,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Mesa de partes",
            "inicial": "M",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 1,
            "created_at": "2015-11-11T09:04:08",
            "updated_at": "2015-11-11T11:40:39",
            "nombre": "No clientes"
          }
        ]
      },
      {
        "id": 139,
        "nombre": "11",
        "orden": 10,
        "sharedGrupoatencion": [
          {
            "id": 5,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Atenci\u00f3n",
            "inicial": "A",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 2,
            "created_at": "2015-11-11T09:10:33",
            "updated_at": "2015-11-11T11:41:07",
            "nombre": "Clientes preferentes"
          }
        ]
      },
      {
        "id": 140,
        "nombre": "12",
        "orden": 11,
        "sharedGrupoatencion": [
          {
            "id": 6,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Plataforma",
            "inicial": "P",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 3,
            "created_at": "2015-11-11T11:41:25",
            "updated_at": "2015-11-11T11:41:25",
            "nombre": "Clientes regulares"
          }
        ]
      },
      {
        "id": 141,
        "nombre": "A",
        "orden": 12,
        "sharedGrupoatencion": [
          {
            "id": 1,
            "created_at": "2015-11-11T10:28:58",
            "updated_at": "2015-11-11T11:36:38",
            "nombre": "Informaci\u00f3n",
            "inicial": "I",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 1,
            "created_at": "2015-11-11T09:04:08",
            "updated_at": "2015-11-11T11:40:39",
            "nombre": "No clientes"
          }
        ]
      },
      {
        "id": 142,
        "nombre": "B",
        "orden": 13,
        "sharedGrupoatencion": [
          {
            "id": 2,
            "created_at": "2015-11-11T11:37:03",
            "updated_at": "2015-11-11T11:37:03",
            "nombre": "Tr\u00e1mites",
            "inicial": "T",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 2,
            "created_at": "2015-11-11T09:10:33",
            "updated_at": "2015-11-11T11:41:07",
            "nombre": "Clientes preferentes"
          }
        ]
      },
      {
        "id": 143,
        "nombre": "C",
        "orden": 14,
        "sharedGrupoatencion": [
          {
            "id": 3,
            "created_at": "2015-11-11T11:38:27",
            "updated_at": "2015-11-11T11:38:27",
            "nombre": "Cobranzas",
            "inicial": "C",
            "color": "#ffffff"
          }
        ],
        "sharedJerarquia": [
          {
            "id": 3,
            "created_at": "2015-11-11T11:41:25",
            "updated_at": "2015-11-11T11:41:25",
            "nombre": "Clientes regulares"
          }
        ]
      }
    ]
  }
]
*/
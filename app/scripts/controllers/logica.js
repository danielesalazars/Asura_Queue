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
    var Logica = $rootScope.main.local;

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
        $scope.ventanillas    =    data[0]['ownVentanilla'];
        $scope.sharedJerarquia=    data[0]['sharedJerarquia'];
        $scope.act_btn_up     =    !$scope.act_btn_crear;
        $scope.title_slide    =    'Editar lógica:';
        $scope.logica.nombre  =    data[0]["nombre"]; //siempre 0
        $scope.estado = true;
         //activar o desactivar ITEM
        $scope.logica.disabled     = false;
        if(data[0]['id'] < 4){
          $scope.logica.disabled   = true;
        }
        //muestra estado de checked
        $scope.atendiendo = function(posicion_ventanilla, posicion_grupo_atencion , id_grupo_atencion){
          //console.log(numero_ventanilla + '-' + id_grupo_atencion);
          var grupo_atencion = data[0]['ownVentanilla'][posicion_ventanilla]['sharedGrupoatencion'];
          console.log(id_grupo_atencion);
          if(grupo_atencion != undefined){
            if(grupo_atencion.length > 0){
              //console.log(grupo_atencion[0]['id'] +'-'+ id_grupo_atencion);
              for (var i = 0; i < grupo_atencion.length; i++) {

                if(grupo_atencion[i]['id'] == id_grupo_atencion){
                  return true
                }else{
                  return false;
                }

              };
            }
          }else{
            return false;
          }
          //console.log(dato);
          // if (dato == 'undefined' ){
          //   return 'Si';
          // }else{
          //   return 'No'
          // }
          //console.log(data[0]['ownVentanilla'][numero_ventanilla]['sharedGrupoatencion'][id_grupo_atencion]['id']);
        
        }
        //console.log(data[0]['ownVentanilla'][0]['sharedGrupoatencion']);
        //console.log(data[0]['ownVentanilla'][0]['sharedGrupoatencion'][0]['id']);


      });
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

      $scope.eliminar = function(_id){
        Logica.delete({id: _id},function(){
        $rootScope.main.logicas.query({id: $rootScope.id_cuenta}, function(data){
          $scope.logicas = data;
        });
        })
      }

      $scope.close = function(){
        $scope.estado = !$scope.estado;
      }

      $scope.check_portada = function(indice, publicado){
        if (publicado == 0){
          $scope.locales[indice]['es_publicado'] = 1;
        }else{
          $scope.locales[indice]['es_publicado'] = 0;
        }
      }

  }]);
'use strict';

/**
 * @ngdoc function
 * @name Asura.controller:LogicakioscosCtrl
 * @description
 * # LogicakioscosCtrl
 * Controller of the Asura
 */
angular.module('Asura')
  .controller('LogicakioscosCtrl',['$scope','$rootScope', function ($scope, $rootScope) {
    
    var Configuracion = $rootScope.main.configuracion;
 
    $scope.checked = function(modelo){
 		if($scope.configuraciones[0][modelo] == 0){
			$scope.configuraciones[0][modelo] = 1;
 		}else{
			$scope.configuraciones[0][modelo] = 0;
 		}
	}

	$scope.update = function(){
		var data =
		[
		    {
		        "cuenta_id":  $rootScope.id_cuenta,
		        "configuracion":
		        {
		            "kiosco_leer_barra": 			$scope.configuraciones[0]['kiosco_leer_barra'],
		            "kiosco_leer_banda": 			$scope.configuraciones[0]['kiosco_leer_banda'],
		            "kiosco_leer_teclado": 			$scope.configuraciones[0]['kiosco_leer_teclado'],
		            "kiosco_debe_identificarse": 	$scope.configuraciones[0]['kiosco_debe_identificarse'],
		            "kiosco_espera": 				$scope.configuraciones[0]['kiosco_espera'],
		            "kiosco_tolerancia": 			$scope.configuraciones[0]['kiosco_tolerancia'],
		        }
		    }
		];

		Configuracion.post(data, function(data){
			//console.log(data);
		})
	}

  }]);
'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the demoApp
 */
angular.module('Asura')
  .controller('FileCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
    var Archivos = $rootScope.main.archivos;
     $scope.actualizar = function() {
      console.log("dato");
      /*if ($scope.form.logo1.$valid && $scope.logo1) {
        console.log($scope.logo1);
      }*/
    };

    // upload on file select or drop
    /*$scope.upload = function (file) {
        Upload.upload({
            url: 'http://api.asura.piensamasalla.com/archivos',
            file: file
        }).then(function (resp) {
            console.log('Success ' + resp.config.file.name + 'uploaded. Response: ' + resp);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
        });
    };*/
  }]);

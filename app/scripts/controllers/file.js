'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the demoApp
 */
angular.module('Asura')
  .controller('FileCtrl', ['$scope','$rootScope','Upload', function ($scope, $rootScope, Upload) {
    var Archivos = $rootScope.main.archivos;
     $scope.submit = function() {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        /*
        Archivos.post(file,function(data){
          console.log(data);
        })*/
        /*$http.post('http://api.asura.piensamasalla.com/archivos', file,
        {
          headers:{
            'Content-Type':'undefined'}
        })
        .success(function(data){
          console.log(data)
        })
        */
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
    };
  }]);

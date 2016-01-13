'use strict';

describe('Controller: CltsalteadosCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var CltsalteadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CltsalteadosCtrl = $controller('CltsalteadosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CltsalteadosCtrl.awesomeThings.length).toBe(3);
  });
});

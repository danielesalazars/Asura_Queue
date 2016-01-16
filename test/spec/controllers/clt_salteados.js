'use strict';

describe('Controller: CltSalteadosCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var CltSalteadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CltSalteadosCtrl = $controller('CltSalteadosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CltSalteadosCtrl.awesomeThings.length).toBe(3);
  });
});

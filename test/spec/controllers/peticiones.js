'use strict';

describe('Controller: PeticionesCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var PeticionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeticionesCtrl = $controller('PeticionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PeticionesCtrl.awesomeThings.length).toBe(3);
  });
});

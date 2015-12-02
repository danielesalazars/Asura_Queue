'use strict';

describe('Controller: SeguridadCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var SeguridadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeguridadCtrl = $controller('SeguridadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SeguridadCtrl.awesomeThings.length).toBe(3);
  });
});

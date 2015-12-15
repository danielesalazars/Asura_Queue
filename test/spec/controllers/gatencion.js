'use strict';

describe('Controller: GatencionCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var GatencionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GatencionCtrl = $controller('GatencionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GatencionCtrl.awesomeThings.length).toBe(3);
  });
});

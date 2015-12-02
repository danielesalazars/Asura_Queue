'use strict';

describe('Controller: ModAtencion2Ctrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var ModAtencion2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModAtencion2Ctrl = $controller('ModAtencion2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModAtencion2Ctrl.awesomeThings.length).toBe(3);
  });
});

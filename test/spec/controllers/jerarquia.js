'use strict';

describe('Controller: JerarquiaCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var JerarquiaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JerarquiaCtrl = $controller('JerarquiaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JerarquiaCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: SupervisionCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var SupervisionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SupervisionCtrl = $controller('SupervisionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SupervisionCtrl.awesomeThings.length).toBe(3);
  });
});

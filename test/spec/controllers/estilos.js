'use strict';

describe('Controller: EstilosCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var EstilosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstilosCtrl = $controller('EstilosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EstilosCtrl.awesomeThings.length).toBe(3);
  });
});

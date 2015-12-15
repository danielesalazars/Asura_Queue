'use strict';

describe('Controller: LocalesCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var LocalesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocalesCtrl = $controller('LocalesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LocalesCtrl.awesomeThings.length).toBe(3);
  });
});

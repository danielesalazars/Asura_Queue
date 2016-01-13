'use strict';

describe('Controller: ComparativoticketsCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var ComparativoticketsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComparativoticketsCtrl = $controller('ComparativoticketsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComparativoticketsCtrl.awesomeThings.length).toBe(3);
  });
});

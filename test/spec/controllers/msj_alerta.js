'use strict';

describe('Controller: MsjAlertaCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var MsjAlertaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MsjAlertaCtrl = $controller('MsjAlertaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MsjAlertaCtrl.awesomeThings.length).toBe(3);
  });
});

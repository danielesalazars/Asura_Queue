'use strict';

describe('Controller: TktimpresosCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var TktimpresosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TktimpresosCtrl = $controller('TktimpresosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TktimpresosCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: CltAtendidosCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var CltAtendidosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CltAtendidosCtrl = $controller('CltAtendidosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CltAtendidosCtrl.awesomeThings.length).toBe(3);
  });
});

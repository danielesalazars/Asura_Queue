'use strict';

describe('Controller: DescargadatosCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var DescargadatosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DescargadatosCtrl = $controller('DescargadatosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DescargadatosCtrl.awesomeThings.length).toBe(3);
  });
});

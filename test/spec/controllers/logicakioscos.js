'use strict';

describe('Controller: LogicakioscosCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var LogicakioscosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogicakioscosCtrl = $controller('LogicakioscosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LogicakioscosCtrl.awesomeThings.length).toBe(3);
  });
});

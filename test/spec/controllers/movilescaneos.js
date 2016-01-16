'use strict';

describe('Controller: MovilescaneosCtrl', function () {

  // load the controller's module
  beforeEach(module('Asura'));

  var MovilescaneosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovilescaneosCtrl = $controller('MovilescaneosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovilescaneosCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: PhonecatCtrl', function () {

  // load the controller's module
  beforeEach(module('myappApp'));

  var PhonecatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhonecatCtrl = $controller('PhonecatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

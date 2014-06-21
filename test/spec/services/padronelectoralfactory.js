'use strict';

describe('Service: padronElectoralFactory', function () {

  // load the service's module
  beforeEach(module('yeomanOrigamiApp'));

  // instantiate service
  var padronElectoralFactory;
  beforeEach(inject(function (_padronElectoralFactory_) {
    padronElectoralFactory = _padronElectoralFactory_;
  }));

  it('should do something', function () {
    expect(!!padronElectoralFactory).toBe(true);
  });

});

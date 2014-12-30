var expect = require('chai').expect;
var tv4 = require('tv4');
var schema = require('../../schemas/resource.json');

describe('Resource tests', function() {

  it('should accept valid json', function() {
    expect(tv4.validate(require('./valid.json'), schema)).to.be.true;
  });

  it('should reject invalid json', function() {
    expect(tv4.validate(require('./invalid.json'), schema)).to.be.false;
  });

});

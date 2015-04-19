var test = require('pr-spec-test');
var expect = require('chai').expect;
var schema = require('..');

describe('Description tests', function() {

  it('should accept valid json', function() {
    expect(test.validate(require('./valid.json'), schema)).to.be.true;
  });

  it('should reject invalid json', function() {
    expect(test.validate(require('./invalid.json'), schema)).to.be.false;
  });

});

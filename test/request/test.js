var expect = require('chai').expect;
var tv4 = require('tv4');
var schema = require('../../schemas/request.json');

describe('Request tests', function() {

  it('should should accept valid json', function() {
    expect(tv4.validate(require('./valid.json'), schema)).to.be.true;
  });

  it('should should reject invalid json', function() {
    expect(tv4.validate(require('./invalid.json'), schema)).to.be.false;
  });

});

var expect = require("chai").expect;
var greet = require('greet');

describe('greet', function(){
  it("should greet a person by name", function(){
    expect(greet('Martin')).to.eql('hello, Martin');
  });

  it("should greet a person flirtatiously if drunk", function(){
    expect(greet('Martin', true)).to.eql('hello Martin, you look sexy today');
  });
});

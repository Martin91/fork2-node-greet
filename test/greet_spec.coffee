greet = require 'greet'

describe 'greet', ->
  it "should greeet a person by name", ->
    expect(greet('Martin')).to.eql('hello, Martin')

  it "should greet a person flirtatiously if drunk", ->
    expect(greet('Martin', true)).to.eql('hello Martin, you look sexy today')

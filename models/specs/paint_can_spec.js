const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('Paint Can', function(){
  let paintCan;

  beforeEach(function(){
    paintCan = new PaintCan(2);
  });

  it('should have a number of litres', function(){
    const actual = paintCan.volume;
    assert.strictEqual(actual,2);
  });

  it("should be able to check if it's empty", function(){
    const actual = paintCan.isEmpty();
    assert.strictEqual(actual, false);
  });

  it("should empty itself of paint", function(){
    paintCan.empty();
    const actual = paintCan.isEmpty();
    assert.strictEqual(actual, true);
  });

});

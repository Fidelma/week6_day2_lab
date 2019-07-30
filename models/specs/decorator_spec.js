const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');

describe('Decorator', function(){
  let decorator;

  beforeEach(function(){
    decorator = new Decorator();
    paintCan1 = new PaintCan(2);
    paintCan2 = new PaintCan(3);
  });

  it('should have an empty paint stock', function(){
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a can of paint to stock', function(){
    decorator.addPaint(paintCan1);
    const actual = decorator.paintStock;
    const expected = [paintCan1];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate total litres of stock', function(){
    decorator.addPaint(paintCan1);
    decorator.addPaint(paintCan2);
    const actual = decorator.totalPaint();
    assert.strictEqual(actual, 5);
  });


});

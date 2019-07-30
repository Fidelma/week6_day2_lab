const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', function(){
  let decorator;
  let paintCan1;
  let paintCan2;
  let room;

  beforeEach(function(){
    decorator = new Decorator();
    paintCan1 = new PaintCan(2);
    paintCan2 = new PaintCan(3);
    room = new Room(5);
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

  it('should be able to ckeck if enough paint for room', function(){
    decorator.addPaint(paintCan1);
    decorator.addPaint(paintCan2);
    const actual = decorator.checkRoom(room);
    assert.strictEqual(actual, true);

  });

  it('should be able to paint room if has enough paint', function(){
    decorator.addPaint(paintCan1);
    decorator.addPaint(paintCan2);
    decorator.paintRoom(room);
    const actual = room.paintedArea
    assert.strictEqual(actual, 5);
  });


});

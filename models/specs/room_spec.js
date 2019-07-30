const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
  let room;

  beforeEach(function(){
    room = new Room(5);
  });

  it('should have an area', function(){
    const actual = room.area;
    assert.strictEqual(actual,5);
  });

  it('should start unpainted', function(){
    const actual = room.paintedArea;
    assert.strictEqual(actual, 0);
  });

  it('should ne able to be painted', function(){
    room.paint(2);
    const actual = room.paintedArea;
    assert.strictEqual(actual, 2);
  });
});

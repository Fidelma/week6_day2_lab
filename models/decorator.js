const Decorator = function (){
  this.paintStock = [];
};

Decorator.prototype.addPaint = function (paintCan) {
  this.paintStock.push(paintCan);
};

Decorator.prototype.totalPaint = function () {
  const sum = this.paintStock.reduce((a,b) => a + b.volume, 0);
  return sum;
};

Decorator.prototype.checkRoom = function (room) {
  return this.totalPaint() >= room.area;
};

Decorator.prototype.paintRoom = function (room) {
  if (this.checkRoom(room)){
    room.paint(room.area);
  }
};

module.exports = Decorator;

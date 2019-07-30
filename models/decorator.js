const Decorator = function (){
  this.paintStock = [];
};

Decorator.prototype.addPaint = function (paintCan) {
  this.paintStock.push(paintCan);
};

module.exports = Decorator;

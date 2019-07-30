const Room = function(area){
  this.area = area;
  this.paintedArea = 0;
};

Room.prototype.paint = function (area) {
  this.paintedArea += area;
};

module.exports = Room;

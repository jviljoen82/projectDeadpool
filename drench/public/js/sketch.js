function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

var cols;
var grid;
var rows;
var w = 20;

function setup() {
  createCanvas(520, 520);
  cols = floor(width / w - 2.5);
  rows = floor(height / w - 2.5);
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
        }
    }
}
function draw() {
  background(255);

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
        }
    }
}

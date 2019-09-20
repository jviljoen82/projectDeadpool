function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

//let cols;
let grid;
const cols = 14;
const rows = 14;
// let rows;
let w = 20;

function setup() {
  createCanvas(500, 600);
  // cols = floor(width / w - 2.5);
  // rows = floor(height / w - 2.5);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
        }
  }
  
  //draw grid once
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}

function draw() {
  

  // moved to setup to only draw once
  /*
    background(255);

    for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
        }
    } */ 
}

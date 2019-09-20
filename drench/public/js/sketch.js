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
const red = [255, 0, 0, 100, 100, 0];
const blue = [0, 255, 0, 100, 0, 100];
const green = [0, 0, 255, 0, 100, 100];

const Button1 = new Clickable(50, 50);
  

function setup() {
  createCanvas(320, 410);
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

  

  // button setup
  // button1
  Button1.x = 10;
  Button1.y = 305;
  Button1.height = 40;
  Button1.width = 40;
  Button1.color = color(red[1], green[1], blue[1]);
  Button1.cornerRadius = 10;
  Button1.strokeWeight = 2;
  Button1.stroke = '#000000';
  Button1.textColor = color(red[1], green[1], blue[1]);

}

// *******************************
// higlight button on hover
// *******************************

// button1
Button1.onOutside = function () {
  Button1.stroke = '#000000';
};
Button1.onHover = function () {
  Button1.stroke = '#FFFFFF';
};



// ***************************************
// button click methods to folow
// ***************************************


function draw() {
  // draw button panel with buttons
  fill('#B9B7B7');
  stroke('#949494');
  rect(5, 300, 280, 105);
  Button1.draw();

  // moved to setup to only draw once
  /*
    background(255);

    for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
        }
    } */ 
}

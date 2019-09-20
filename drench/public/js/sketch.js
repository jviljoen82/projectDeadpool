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
const w = 20;
const buttonSize = 40;
const red = [255, 0, 0, 244, 175, 133];
const green = [0, 0, 255, 208, 122, 193];
const blue = [0, 255, 0, 63, 197, 233];

const Button1 = new Clickable();
const Button2 = new Clickable();
  

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

  // **************************************************
  // button setup
  // button1
  let btn1Color = color(red[0], green[0], blue[0]);
  Button1.x = 10;
  Button1.y = 305;
  Button1.height = buttonSize;
  Button1.width = buttonSize;
  Button1.color = btn1Color;
  Button1.cornerRadius = 10;
  Button1.strokeWeight = 2;
  Button1.stroke = '#000000';
  Button1.textColor = btn1Color;

  // button2
  let btn2Color = color(red[1], green[1], blue[1]);
  Button2.x = 60;
  Button2.y = 305;
  Button2.height = buttonSize;
  Button2.width = buttonSize;
  Button2.color = btn2Color;
  Button2.cornerRadius = 10;
  Button2.strokeWeight = 2;
  Button2.stroke = '#000000';
  Button2.textColor = btn2Color;

  // ***************************************************
}

function draw() {
  // draw button panel with buttons
  fill('#B9B7B7');
  stroke('#949494');
  rect(5, 300, 280, 105);
  Button1.draw();
  Button2.draw();

  // moved to setup to only draw once
  /*
    background(255);

    for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
        }
    } */ 
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

// button1
Button2.onOutside = function () {
  Button2.stroke = '#000000';
};
Button2.onHover = function () {
  Button2.stroke = '#FFFFFF';
};




// ***************************************
// button click methods to folow
// ***************************************


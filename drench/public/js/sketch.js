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
const Button3 = new Clickable();
const Button4 = new Clickable();
const Button5 = new Clickable();
const Button6 = new Clickable();
  

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

   // button3
   let btn3Color = color(red[2], green[2], blue[2]);
   Button3.x = 110;
   Button3.y = 305;
   Button3.height = buttonSize;
   Button3.width = buttonSize;
   Button3.color = btn3Color;
   Button3.cornerRadius = 10;
   Button3.strokeWeight = 2;
   Button3.stroke = '#000000';
   Button3.textColor = btn3Color;
  
   // button4
   let btn4Color = color(red[3], green[3], blue[3]);
   Button4.x = 10;
   Button4.y = 355;
   Button4.height = buttonSize;
   Button4.width = buttonSize;
   Button4.color = btn4Color;
   Button4.cornerRadius = 10;
   Button4.strokeWeight = 2;
   Button4.stroke = '#000000';
   Button4.textColor = btn4Color;
  
   // button5
   let btn5Color = color(red[4], green[4], blue[4]);
   Button5.x = 60;
   Button5.y = 355;
   Button5.height = buttonSize;
   Button5.width = buttonSize;
   Button5.color = btn5Color;
   Button5.cornerRadius = 10;
   Button5.strokeWeight = 2;
   Button5.stroke = '#000000';
   Button5.textColor = btn5Color;
  
   // button6
   let btn6Color = color(red[5], green[5], blue[5]);
   Button6.x = 110;
   Button6.y = 355;
   Button6.height = buttonSize;
   Button6.width = buttonSize;
   Button6.color = btn6Color;
   Button6.cornerRadius = 10;
   Button6.strokeWeight = 2;
   Button6.stroke = '#000000';
   Button6.textColor = btn6Color;

  // ***************************************************
}

function draw() {
  // draw button panel with buttons
  fill('#B9B7B7');
  stroke('#949494');
  rect(5, 300, 160, 105);
  Button1.draw();
  Button2.draw();
  Button3.draw();
  Button4.draw();
  Button5.draw();
  Button6.draw();

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

// button2
Button2.onOutside = function () {
  Button2.stroke = '#000000';
};
Button2.onHover = function () {
  Button2.stroke = '#FFFFFF';
};

// button3
Button3.onOutside = function () {
  Button3.stroke = '#000000';
};
Button3.onHover = function () {
  Button3.stroke = '#FFFFFF';
};

// button4
Button4.onOutside = function () {
  Button4.stroke = '#000000';
};
Button4.onHover = function () {
  Button4.stroke = '#FFFFFF';
};

// button5
Button5.onOutside = function () {
  Button5.stroke = '#000000';
};
Button5.onHover = function () {
  Button5.stroke = '#FFFFFF';
};

// button6
Button6.onOutside = function () {
  Button6.stroke = '#000000';
};
Button6.onHover = function () {
  Button6.stroke = '#FFFFFF';
};




// ***************************************
// button click methods to folow
// ***************************************

// button1
Button1.onPress = function () {
  console.log("button 1 pressed");
};
Button1.onRelease = function () {
  // TODO: tile colour change logic call
};

// button2
Button2.onPress = function () {
  console.log("button 2 pressed");
};
Button2.onRelease = function () {
  // TODO: tile colour change logic call
};

// button3
Button3.onPress = function () {
  console.log("button 3 pressed");
};
Button3.onRelease = function () {
  // TODO: tile colour change logic call
};

// button4
Button4.onPress = function () {
  console.log("button 4 pressed");
};
Button4.onRelease = function () {
  // TODO: tile colour change logic call
};

// button5
Button5.onPress = function () {
  console.log("button 5 pressed");
};
Button5.onRelease = function () {
  // TODO: tile colour change logic call
};

// button6
Button6.onPress = function () {
  console.log("button 6 pressed");
};
Button6.onRelease = function () {
  // TODO: tile colour change logic call
};

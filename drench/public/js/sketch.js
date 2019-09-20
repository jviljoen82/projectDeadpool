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

const resetBtn = new Clickable();

const btnList = [Button1, Button2, Button3, Button4, Button5, Button6];

function btnSetup(currentBtn, index) {
  let btnColor = color(red[index], green[index], blue[index]);
  if (index <= 2) {
    currentBtn.x = 15 + (index * 50);
    currentBtn.y = 310;
  } else {
    currentBtn.x = 15 + ((index - 3) * 50);
    currentBtn.y = 360;
  }  
  currentBtn.height = buttonSize;
  currentBtn.width = buttonSize;
  currentBtn.color = btnColor;
  currentBtn.cornerRadius = 10;
  currentBtn.strokeWeight = 2;
  currentBtn.stroke = '#000000';
  currentBtn.textColor = btnColor;
}  

function setup() {
  createCanvas(320, 420);
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
  for (ind = 0; ind <= 5; ind++){
    btnSetup(btnList[ind], ind);
  }

  //reset btn
  resetBtn.x = 180;
  resetBtn.y = 300; 
  resetBtn.color = '#C0C0C0';
  resetBtn.cornerRadius = 10;
  resetBtn.strokeWeight = 2;
  resetBtn.stroke = '#808080';
  resetBtn.textColor = '#808080';
  resetBtn.text = 'RESET';
}

function draw() {
  // draw button panel with buttons
  fill('#C0C0C0');
  stroke('#808080');
  rect(5, 300, 160, 110);
  for (btnInd = 0; btnInd <= 5; btnInd++) {
    btnList[btnInd].draw();
  }
  resetBtn.draw();

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
Button1.onOutside = () => {
  Button1.stroke = '#000000';
};
Button1.onHover = () => {
  Button1.stroke = '#FFFFFF';
};

// button2
Button2.onOutside = () => {
  Button2.stroke = '#000000';
};
Button2.onHover = () => {
  Button2.stroke = '#FFFFFF';
};

// button3
Button3.onOutside = () => {
  Button3.stroke = '#000000';
};
Button3.onHover = () => {
  Button3.stroke = '#FFFFFF';
};

// button4
Button4.onOutside = () => {
  Button4.stroke = '#000000';
};
Button4.onHover = () => {
  Button4.stroke = '#FFFFFF';
};

// button5
Button5.onOutside = () => {
  Button5.stroke = '#000000';
};
Button5.onHover = () => {
  Button5.stroke = '#FFFFFF';
};

// button6
Button6.onOutside = () => {
  Button6.stroke = '#000000';
};
Button6.onHover = () => {
  Button6.stroke = '#FFFFFF';
};

// reset button
resetBtn.onOutside = () => {
  resetBtn.stroke = '#808080';
};
resetBtn.onHover = () => {
  resetBtn.stroke = '#FFFFFF';
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

// reset button
resetBtn.onPress = function () {
  console.log("RESET!");
};
resetBtn.onRelease = function () {
  setup();
};
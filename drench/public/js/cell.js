class Cell {
  
  constructor(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.red = [255, 0, 0, 100, 100, 0];
    this.blue = [0, 255, 0, 100, 0, 100];
    this.green = [0, 0, 255, 0, 100, 100];
  }
  show() {
    //stroke(0);
    let colorRandomzer = Math.floor(random(6));
    noStroke();
    let c = color(this.red[colorRandomzer], this.green[colorRandomzer], this.blue[colorRandomzer]);
    fill(c);
    rect(this.x, this.y, this.w, this.w);
  }
}



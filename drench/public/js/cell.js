class Cell {
  constructor(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
  }
  show() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
  }
}



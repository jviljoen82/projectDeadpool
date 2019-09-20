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
    this.colorRandomzer = Math.floor(random(6));
    this.c = color(this.red[this.colorRandomzer], this.green[this.colorRandomzer], this.blue[this.colorRandomzer]);
  }
  show() {
    //stroke(0);
    noStroke();
    fill(this.c);
    rect(this.x, this.y, this.w, this.w);
  }
}



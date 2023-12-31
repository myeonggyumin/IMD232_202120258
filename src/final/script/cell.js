class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = false;
    this.nextState = this.state;
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    const livingNeighbors = this.neighbors.filter(
      (eachNeighbor) => eachNeighbor?.state
    );
    const livingNum = livingNeighbors.length;
    if (this.state) {
      if (livingNum < 2 || livingNum > 3) {
        this.nextState = false;
      } else {
        this.nextState = this.state;
      }
    } else {
      if (livingNum === 3) {
        this.nextState = true;
      } else {
        this.nextState = this.state;
      }
    }
  }

  update() {
    this.state = this.nextState;
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = !this.state;
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.state ? 'lime' : 0);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

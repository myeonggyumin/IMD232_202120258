class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = 'rock';
    this.nextState = this.state;
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    //const livingNum = livingNeighbors.length;

    let NeighborState;

    if (this.state === 'rock') {
      NeighborState = 'paper';
    } else if (this.state === 'paper') {
      NeighborState = 'scissors';
    } else if (this.state === 'scissors') {
      NeighborState = 'rock';
    }

    const livingNeighbors = this.neighbors.filter(
      (eachNeighbor) => eachNeighbor?.state === NeighborState
    );

    if (livingNeighbors.length > 2) {
      this.nextState = NeighborState;
    } else {
      this.nextState = this.state;
    }
  }

  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = !this.state;
    if (this.state === 'rock') {
      this.state = 'paper';
    } else if (this.state === 'paper') {
      this.state = 'scissors';
    } else if (this.state === 'scissors') {
      this.state = 'rock';
    }
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    //stroke(this.isHover(mx, my) ? 'red' : 'black');
    if (this.state === 'rock') {
      fill('#ff0000');
    } else if (this.state === 'paper') {
      fill('#00ff00');
    } else if (this.state === 'scissors') {
      fill('#0000ff');
    }
    rect(0, 0, this.w, this.h);
    pop();
  }
}

// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/098.1-quadtree.html
// https://thecodingtrain.com/CodingChallenges/098.2-quadtree.html
// https://thecodingtrain.com/CodingChallenges/098.3-quadtree.html

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.highlight = false;
    this.r = 8;
    this.deltax = random(-50, 50);
    this.deltay = random(-50, 50);
  }

  move() {
    this.x += this.deltax/10;
    this.y += this.deltay/10;
    if(this.x > 600) this.x = 0;
    if(this.y < 0) this.y = 400;
    if(this.x < 0) this.x = 600;
    if(this.y > 400) this.y = 0;
  }

  render() {
    noStroke();
    if (this.highlight) fill(255);
    else fill(100);
    ellipse(this.x, this.y, this.r, this.r);

    stroke(255);
    strokeWeight(2);
    line(this.x, this.y, this.x + this.deltax/2, this.y + this.deltay/2);
    strokeWeight(4);
    line(this.x + this.deltax/2, this.y + this.deltay/2, this.x + this.deltax, this.y + this.deltay);
  }

  checkCollision(others) {
    this.highlight = false;
    for (let other of others) {
      if (other.userData) {
        other = other.userData;
      }
      if (this != other) {
        let d = dist(this.x, this.y, other.x, other.y);
        if (d < other.r / 2 + this.r / 2) {
          this.highlight = true;
        }
      }
    }
  }
}

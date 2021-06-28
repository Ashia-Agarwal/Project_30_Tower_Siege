class Box {
  constructor(x, y, width, height, color) {
    var options = {
      'restitution': 0.5,
      'friction': 1.0,
      'density': 15
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.visibility = 255;
    World.add(world, this.body);
  }

  display(outline) {
    rectMode(CENTER);
    if(this.body.speed > 3) {
      stroke("black");
      fill("black");
      World.remove(world, this.body);
    } else {
      fill(this.color);
      stroke(outline);
    }
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }
}
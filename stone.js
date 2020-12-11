class Stone{
    constructor(x, y,radius) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':100,
          'density':3,
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.position;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius)
        pop();
    }
  };
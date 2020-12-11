class Tree{
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0.8,
          'friction':100,
          'density':3,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/tree.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.position;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height)
        pop();
    }
  };
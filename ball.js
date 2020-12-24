class ball {
    constructor(x, y) {
      var options = {
          
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.9
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      
      this.ballimage = loadImage("paper.png");


      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image (this.ballimage,0,0,50,50);
           pop();
    }
  };
  
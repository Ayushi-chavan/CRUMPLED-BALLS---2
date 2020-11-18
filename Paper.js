class paper{
    constructor(x,y)
    {
        var options = {
         isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,100, options);
   this.image = loadImage("paper.png");
  
    World.add(world, this.body);
}

display() {
    imageMode(CENTER);
    image(this.image, 200, 620, 100, 100)
    fill("white")
}
}
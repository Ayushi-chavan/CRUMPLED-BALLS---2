class dustbin{
    constructor(x, y, width, height){
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y,300,300,options)
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.body);
    }

    display(){
        
        imageMode(CENTER);
        image(this.image, 1200, 510,300,300);
      }
}

class paperBall{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(50,650,8,options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        fill("white");
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
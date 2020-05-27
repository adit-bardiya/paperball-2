class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("green");
        noStroke();
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,550,515,200,170);
    }
}
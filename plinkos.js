class Plinkos{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 20;
        this.body = Bodies.circle(x,y,20,{isStatic:true})
        World.add(world,this.body)
    }
    display(){
        var position = this.body.position
        push()
        translate(position.x,position.y)
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0,0,10,10)
        pop()
    }
}
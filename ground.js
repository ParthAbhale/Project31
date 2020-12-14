class Ground{
    constructor(x,y,width){
        this.width = width;
        this.height = 20;
        this.body = Bodies.rectangle(x,y,width,20,{isStatic:true})
        World.add(world,this.body)
    }
    display(){
        var gpos = this.body.position;
        push()
        translate(gpos.x,gpos.y)
        // noStroke()
        fill("white")
        rectMode(CENTER)
        rect(0,0,width,20)
        pop()
    }
}
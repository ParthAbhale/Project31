class Division{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world,this.body)
    }
    display(){
        var boundPos = this.body.position
        push()
        translate(boundPos.x,boundPos.y)
        noStroke()
        fill("white")
        rect(0,0,10,500)
        pop()
    }
}
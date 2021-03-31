class Paper {
    constructor(x,y,r)
    {
        var options={
            restritution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x, y, r, options);
        Matter.Body.setMass(this.body, this.body.mass * 2);
        Matter.World.add(world, this.body);
        this.r = r;
    }
    display(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255)
        imageMode(CENTER);
        image(paperImg, 0, 0, this.r * 2, this.r * 2);
        pop();
    }
}
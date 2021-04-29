class Particle {
    constructor(x, y,) {

        var options ={
            restitution:0.4
        }
      
        this.body = Bodies.circle(x, y,options);       
        this.color=color(random(50, 255), random(50, 255), random(50, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        pop();
    }

};
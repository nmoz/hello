class Rock {
    constructor(x, y, angle){
        var options = {
            'restitution': 0.8,
            'density': 0.9,
            'friction': 1.0
        }

        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        this.image = loadImage("images/rock.png");
        World.add(world, this.body);
    }

    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 20, 20);
        pop();
    }
}
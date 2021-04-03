class Enemy{
    constructor(x, y, angle){
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }

        this.body = Bodies.rectangle(x, y, 10, 20, options);
        this.width = 10;
        this.height = 20;
        this.image = loadImage("images/stickman.png");
        World.add(world, this.body);
    }


    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 25);
        pop();
    }
}
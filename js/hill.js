class Hill {
    constructor(x, y){
        var options = {
            'restitution': 0.8,
            'density': 1.0,
            'friction': 1.0,
            'isStatic': true
        }

        this.body = Bodies.rectangle(x, y, 170, 75, options);
        this.width = 170;
        this.height = 75;
        this.image = loadImage("images/hill.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 220, 200);
        pop();
    }
}
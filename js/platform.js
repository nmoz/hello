class Platform {
    constructor(x, y){
        var options = {
            'restitution': 0,
            'friction': 0.1,
            'density': 5,
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 80, 25, options);
        this.width = 80;
        this.height = 25;
        this.image = loadImage("images/ground.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill("brown");
        image(this.image, pos.x, pos.y, 120, 50);
    }
}
class Castle {
    constructor(){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(565, 295, 65, 60, options);
        this.width = 65;
        this.height = 60;
        this.image = loadImage("images/castle.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image, 14, 0, 170, 260);
        pop();
    }
}
class Castle2 {
    constructor(x, y){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x, y, 30, 78, options);
        this.width = 30;
        this.height = 78;
        //this.image = loadImage("images/castle.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, 30, 80);
        pop();
    }
}
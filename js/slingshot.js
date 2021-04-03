class SlingShot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 5
        }

        this.sling = Constraint.create(options);
        this.sling1 = loadImage("images/sling1.png");
        this.sling2 = loadImage("images/sling2.png");
        this.sling3 = loadImage("images/sling3.png");
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display() {
        image(this.sling1, 585, 180);
        image(this.sling2, 576, 180);

        if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;
           push();

        stroke("black");
        if(pointA.x < 531){
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x, pointA.y, pointB.x + 6, pointB.y - 2);
            image(this.sling3, pointA.x - 15, pointA.y - 8, 7, 15);
        }
        else{
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x, pointA.y, pointB.x + 6, pointB.y - 2);
            image(this.sling3, pointA.x + 7.5, pointA.y - 7.5, 7, 15);
        }
        
        pop();
    }
}
}
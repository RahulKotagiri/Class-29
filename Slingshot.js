class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,25);
        image(this.image2,175,25);
        //image(this.image3,175,100);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#301608");
            strokeWeight(4);
            line(pointA.x - 15, pointA.y - 2.5, pointB.x - 10, pointB.y);
            line(pointA.x + 25, pointA.y , pointB.x + 25, pointB.y + 10);
            image(this.image3,pointA.x - 25,pointA.y - 2, 10);
        }
    }
    
}
class SlingShot{

    // assign bodyA and pointB in argument
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //create constraint between them
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        // if the body is true , display the line
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }

    fly(){
        // remove all the properties of the body (nil)
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
}
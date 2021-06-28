class Slingshot {
    constructor(bodyA, pointB) {
        this.chain = Matter.Constraint.create({length: 25, stiffness: 0.2, bodyA: bodyA, pointB: pointB});
        World.add(world, this.chain);
    }

    display() {
        strokeWeight(6);
        stroke(0);
        if(this.chain.bodyA) {
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
        }
    }

    fly() {
        this.chain.bodyA = null;
    }

    attach(body) {
        this.chain.bodyA = body;
    }
}
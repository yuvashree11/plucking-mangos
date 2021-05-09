class Launcher{
    constructor(bodyA,anchor){
        var option = {
            bodyA: bodyA,
            pointB: anchor,
            stiffness:0.004,
            length:1,
        }

        this.bodyA = bodyA;
        this.pointB = anchor;
        this.launcher = Constraint.create(option);
        World .add (world,this.launcher);
    }

    attach(bodyA){
        this.launcher.bodyA = bodyA;
    }

 fly(){
     this.launcher.bodyA = null;
 }

 display(){
     if(this.launcher.bodyA){
         var pointA = this.bodyA.position;
         var pointB = this.pointB;
        line (pointA.x,pointA.y,pointB.x,pointB.y);
     }

 }
}
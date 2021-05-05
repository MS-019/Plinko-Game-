class Ground{
  constructor(x,y,weight,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,weight,height,options);
    this.weight = weight; 
    this.height= height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
  rect(pos.x, pos.y, this.weight,this.height);
  }
};
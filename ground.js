class Ground{
	constructor(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		var ground_options = {
			isStatic: true
		};
		var ground1 = Matter.Bodies.rectangle(x,y,w,h,ground_options);
		Matter.World.add(world, ground1);
	}
	display(){
		push();
		fill("yellow");
		rect(this.x, this.y, this.w, this.h);
		pop();
	}
}
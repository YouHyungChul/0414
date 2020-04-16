class Bullet extends GameObject{
    constructor(objectId,container,src,width,height,velX,velY,x,y){
        super(objectId,container,src,width,height,velX,velY,x,y);
    }
    tick(){
        this.x += this.velX;
    }
    render(){
        this.div.style.left=this.x+"px";
    }
}
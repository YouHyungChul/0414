class Enemy extends GameObject{
    constructor(objectId,container,src,width,height,velX,velY,x,y){
        super(objectId,container,src,width,height,velX,velY,x,y);
    }
    
    // 부모의 메서드 재정의!!(Override)
    // 부모가 보유한 메서드의 내용이 현재상황에 맞지 않거나
    // 업그레이드가 필요한 경우, 자식은 부모의 메서드를 다시 정의할 수 있다!!
    tick(){
        this.x+=this.velX; // velX를 음수로 두자!!(다가오게 하려고)
    }
    render(){
        this.div.style.left=this.x+"px";
    }
}
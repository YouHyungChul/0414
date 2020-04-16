class Megaman extends GameObject{
    constructor(objectId,container,src,width,height,velX,velY,x,y){
        super(objectId,container,src,width,height,velX,velY,x,y);

        // 메가맨의 이미지는 sprite이기 때문에 div안에서
        // 마스크처리가 되어야 한다... 따라서 이미지의 크기와 div가 같이 않다
        // div를 넘는 이미지에 대해서는 안보이게 만들면 됨
        this.div.style.overflow= "hidden";
        this.img.style.width = 100+"px";
        this.img.style.height = 60 + "px";
    }
    tick(){
        // 좌우 움직임
        this.x += this.velX;

        // 중력적용
        this.velY += this.g; // 가속도 표현
        this.y+= this.velY; // 방향은 y축으로 함으로써, 중력가속도 표현

        // 벽돌위에 서 있기
        for(var i=0; i<objectManager.objectArray.length;i++){
            var gameObject = objectManager.objectArray[i];
            if(gameObject.objectId=="Block"){
                var onBlock = collisionCheck(this.div, gameObject.div);
                if(onBlock){ // 벽돌과 마주치면... 메가멘의 위치는 벽돌보다
                                    // 자신의 키만큼 올라감 (y축의 음수방향에 위치함.)
                    this.y = gameObject.y-this.height;
                    this.velY=0;
                }
            }
        }
    }
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}
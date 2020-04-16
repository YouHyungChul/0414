class GameObject{
    constructor(objectId,container,src,width,height,velX,velY,x,y){
        //  멤버변수 : 클래스 안에 소속된 변수를 가리킴
        // 인스턴스 변수 : 클래스로부터 생성된 인스턴스에 소속된 변수
        this.objectId=objectId; // 객체를 구분하기 위한 식별값  이걸 안 주면 배열에서 누가누군지 모른다.
        this.container=container;
        this.div=document.createElement("div");  //움직이는 모습을 보여주려고 만들었다.
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.x=x;
        this.y=y;
        this.g=0.6;
        // 여기까지가 멤버변수 선언 및 초기화

        //스타일 적용 시작
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position = "absolute";
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y + "px";

        //일단 이미지의 크기를 기본적으로 div와 일치시킴
        this.img.src=this.src;
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";

        //부모 컨테이너에 부착!!!
        this.div.appendChild(this.img); // div에 이미지 부착!!
        this.container.appendChild(this.div);
    }
    /*내용이 완성되지 않은 미완성 메서드를 가리켜 추상메서드라 하며
        abstract 키워드를 붙여야 하는데, 아쉽게도 자바스크립트는 추상케서드를 지원하지 않는다.
        특히 내용이 완성되지 않았음에 대한 판단은 {브레이스}가 없는 메서드를 의미한다 */
        tick(){}
        render(){}
}
/* 이 객체는 화면에 등장과 소멸될 객체들을 관리해 준다!!
and tick(), render()까지 알아서 처리...
따라서 개발자는 객체 생성에만 신경쓰면 된다.*/

class ObjectManager {
    constructor(){
        // 게임에 등장할 모든 객체를 대상으로
        // tick(), render()를 처리하려면
        // 반복문으로 처리해야 한다.
        // 다라서 객체들은 순서가 있는
        // 배열화가 되어 있어야 한다!!

        this.objectArray=[]; //모든 오브젝트가 다 들어갈 예정
                                     //ex) 총알, 아이템, 주인공, 적군 등등...
    }
    // 화면에 등장할 객체 등록
    addObject(obj){
        // alert("당신이 의뢰한 객체는" + obj);
        this.objectArray.push(obj);
    }
    //제거될 객체 처리
    removeObject(){

    }
    // 게임에 등장하는 모든 객체들에 대한 tick(), render()
    tick(){
        // 모든 오브젝트들을 대상으로 tick()
        for(var i=0; i<this.objectArray.length;i++){
            this.objectArray[i].tick();
        }
    }
    render(){
        for(var i=0; i<this.objectArray.length;i++){
            this.objectArray[i].render();
    }
}
}
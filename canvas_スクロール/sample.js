//検証
window.onload = function(){
    console.log("読み込み官僚");
    let at = document.getElementById("canvas");
    console.log(at.clientHeight);
    console.log(at.width);
    opeko();
}

function opeko(){
    const canvas = document.getElementById("canvas");
    const canvas2 = document.getElementById("add");
    const ctx2 = canvas2.getContext("2d");
    function onClick(e){
        console.log(+":のマウスが押されました");
        console.log(e.offsetX+":" + e.offsetY);
        another_window();
    }
    function upClick(e){
        console.log(e+":のマウスが離されました");
        console.log(e.offsetX+":" + e.offsetY);
    }
    function wheel(e){
        ctx2.clearRect(0,0,canvas.width,canvas.height);
        console.log(e.deltaY);
        if(e.deltaY > 0){
            set_y += 20;
        }else{
            set_y -= 20;
        }
        for(i=0;arrayarray.length > i;i+=1){
            ctx2.fillStyle = "#222";
            ctx2.fillRect(5,arrayarray[i].get_y()+set_y,200,10);
            ctx2.fillStyle = "#ccc";
            ctx2.fillText(texttext[i].txt,5,texttext[i].get_y()+set_y + 10);
        }
    }
    canvas.setAttribute("tabindex",0);
    canvas.addEventListener("mousedown",onClick,false);
    canvas.addEventListener("mouseup",upClick,false);
    canvas.addEventListener("wheel",wheel,false);
}

class messag{
    constructor(y=0){
        this.y =y;
    }
    get_y(){
        return this.y;
    }
    dray(){
    }
}

class text{
    constructor(y=0,txt=""){
        this.y = y;
        this.txt = txt;
    }
    get_y(){
        return this.y;
    }
    get_text(){
        return this.txt;
    }
}

arrayarray = [new messag()];
texttext = [new text()];
set_y = 0;
function another_window(){
    const canvas = document.getElementById("add");
    const ctx = canvas.getContext("2d");
    arrayarray.push(new messag(arrayarray[arrayarray.length-1].get_y() + 30));
    texttext.push(new text(texttext[texttext.length-1].get_y() + 30,"helloworld"));
    console.log(arrayarray[arrayarray.length-1].get_y())
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(i=0;arrayarray.length > i;i+=1){
        ctx.fillStyle = "#95DA8D";
        ctx.fillRect(5,arrayarray[i].get_y()+set_y,200,10);
        ctx.fillStyle = "#010300";
        ctx.fillText(texttext[i].txt,5,texttext[i].get_y()+set_y + 10);
    }
}
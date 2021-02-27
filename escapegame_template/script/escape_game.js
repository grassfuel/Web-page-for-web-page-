function key_get(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font=String(canvas.width/5)+"px Ariel";
    let i=0;
    let page = [new Image(),new Image(),new Image(),new Image()];
    page[0].src = "./img/front.png";
    page[1].src = "./img/right.png";
    page[2].src = "./img/back.png";
    page[3].src = "./img/left.png";
    let pagecount = 0;
    function get_down_key(e){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText(e.keyCode,parseInt(canvas.width/2.2),parseInt(canvas.height/2.2));
    }
    function get_up_key(e){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    function get_mouse_xy(e){
        i+=1;
        if(i > 3){
            i=0;
            if(e.clientX > canvas.getBoundingClientRect().width*0.95){
                ctx.fillRect(canvas.getBoundingClientRect().width*0.67,0,canvas.getBoundingClientRect().width*0.05,canvas.getBoundingClientRect().height);
            }else{
                if(e.clientX < canvas.getBoundingClientRect().width*0.05){
                    ctx.fillRect(0,0,canvas.getBoundingClientRect().width*0.05,canvas.getBoundingClientRect().height);
                }else{
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                }
            }
        }
    }
    function get_click(e){
        if(e.clientX > canvas.getBoundingClientRect().width*0.95){
            pagecount+=1;
            if(pagecount > 3){pagecount = 0}
            ctx.drawImage(page[pagecount],0,0,canvas.getBoundingClientRect().width,canvas.getBoundingClientRect().height)
            console.log("page:"+ page[pagecount]);
        }else{
            if(e.clientX < canvas.getBoundingClientRect().width*0.05){
                pagecount -= 1;
                if(pagecount < 0){pagecount = 4}
                ctx.drawImage(page[pagecount],0,0,canvas.getBoundingClientRect().width,canvas.getBoundingClientRect().height)
                console.log("page:"+ page[pagecount]);
            }
        }
        console.log(e)
    }
    canvas.setAttribute("tabindex",0);
    canvas.addEventListener("keyup",get_up_key,false);
    canvas.addEventListener("mousemove",get_mouse_xy,false);
    canvas.addEventListener("keydown",get_down_key,false);
    canvas.addEventListener("click",get_click,false);
}

key_get();
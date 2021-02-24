function key_get(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font=String(canvas.width/5)+"px Ariel";
    function get_down_key(e){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText(e.keyCode,parseInt(canvas.width/2.2),parseInt(canvas.height/2.2));
    }
    function get_up_key(e){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    canvas.setAttribute("tabindex",0);
    canvas.addEventListener("keyup",get_up_key,false);
    canvas.addEventListener("keydown",get_down_key,false);
}

key_get();
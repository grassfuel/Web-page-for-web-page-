//大体escapegame_templateからの使いまわし というかそのためにclassで作った.
class Escape_game_object{
    constructor(src){
        this.img = new Image();
        this.img.src = src; 
    }
    draw(ctx){
        ctx.drawImage(this.img,0,0);
    }
}
//クリック可能オブジェクトの型
class Click_object extends Escape_game_object{
    constructor(x,y,hit_width,hit_height,disp,src){
        super(src);
        this.x = x;
        this.y = y;
        this.disp = disp;
        this.hit_width = hit_width;
        this.hit_height = hit_height;
    }
    draw(ctx){
        ctx.fillRect(this.x,this.y,this.hit_width,this.hit_height);
    }
    click(ctx,cursor){
        if(cursor.x > this.x && cursor.x < this.x+this.hit_width && cursor.y > this.y && cursor.y < this.y+this.hit_height){
            ctx.fillRect(this.x,this.y,this.hit_width,this.hit_height);
            return 1;
        }else{
            return 0;
        }
    }
}

class Side_bar_b extends Click_object{
    constructor(x,y,hit_width,hit_height,disp,src){
        super(x,y,hit_width,hit_height,disp,src);
    }
    draw(ctx){
        ctx.fillRect(this.x,this.y,this.hit_width,this.hit_height);
    }
    click(ctx,canvas,cursor,side_bar){
        console.log(this.x +":"+ canvas.x*0.8)
        if(cursor.x > this.x && cursor.x < this.x+this.hit_width && cursor.y > this.y && cursor.y < this.y+this.hit_height){
            if(this.x <= canvas.width*0.8){
                this.x = canvas.width - canvas.width*0.05
                console.log("ちちみ");
            }else{
                this.x = canvas.width*0.8
                console.log("のび");
            }
            ctx.fillRect(this.x,this.y,this.hit_width,this.hit_height);
            return 1;
        }else{
            return 0;
        }
    }
}


function key_get(){
    let canvas = document.getElementById("canvas");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    let ctx = canvas.getContext("2d");
    let side_barbutton = new Side_bar_b(canvas.width*0.8,0,canvas.width*0.2,canvas.height,0);
    side_barbutton.draw(ctx);

    function get_click(e){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        console.log(side_barbutton.click(ctx,canvas,e));
    }
    canvas.setAttribute("tabindex",0);
    canvas.addEventListener("click",get_click,false);
}

key_get();
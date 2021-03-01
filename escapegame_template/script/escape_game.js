//全体の型
class Escape_game_object{
    constructor(src){
        this.img = new Image();
        this.img.src = src; 
    }
    draw(ctx){
        ctx.drawImage(this.img,0,0);
    }
}
//部屋の描画
class Room extends Escape_game_object{
    constructor(src){
        super(src);
    }
    draw(ctx){
        ctx.drawImage(this.img,0,0,canvas.getBoundingClientRect().width*0.7,canvas.getBoundingClientRect().height*0.7);
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
    draw(ctx,page){
        if(page == this.disp){
            ctx.drawImage(this.img,this.x,this.y);
        }
    }
}
//視点変更用ボタン
class View_change extends Click_object{
    constructor(x,y,hit_width,hit_height,skip_page){
        super(x,y,hit_width,hit_height,null,null)
        this.skip_page = skip_page;
    }
    draw(ctx,cursor){
        if(cursor.clientX > this.x && cursor.clientX < this.x+this.hit_width && cursor.clientY > this.y && cursor.clientY < this.y+this.hit_height){
            ctx.fillRect(this.x,this.y,this.hit_width,this.hit_height);
        }
    }
    click(ctx,cursor){
        ctx.fillRect(this.x,this.y,this.hit_width,this.hit_height);
        if(cursor.clientX > this.x && cursor.clientX < this.x+this.hit_width && cursor.clientY > this.y && cursor.clientY < this.y+this.hit_height){
            return this.skip_page;
        }
    }
}


function key_get(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font=String(canvas.width/5)+"px Ariel";
    let i=0;
    let page = [new Room("./img/front.png"),new Room("./img/right.png"),new Room("./img/back.png"),new Room("./img/left.png")];
    let item = new Click_object(10,10,3,"./img/item.png");
    let right_view = new View_change(canvas.getBoundingClientRect().width*0.67,0,canvas.getBoundingClientRect().width*0.05,canvas.getBoundingClientRect().height,1);
    let left_view = new View_change(0,0,canvas.getBoundingClientRect().width*0.05,canvas.getBoundingClientRect().height,-1);
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
            ctx.clearRect(0,0,canvas.width,canvas.height);
            right_view.draw(ctx,e);
            left_view.draw(ctx,e);
        }
        /*
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
        */
    }
    function get_click(e){
        pagecount += right_view.click(ctx,e);
        pagecount += left_view.click(ctx,e);
        /*
        if(e.clientX > canvas.getBoundingClientRect().width*0.95){
            pagecount+=1;
            if(pagecount > 3){pagecount = 0}
            console.log("page:"+ pagecount);
        }else{
            if(e.clientX < canvas.getBoundingClientRect().width*0.05){
                pagecount -= 1;
                if(pagecount < 0){pagecount = 3}
            }
        }
        */
        console.log("page:"+ pagecount);
        page[pagecount].draw(ctx);
        item.draw(ctx,pagecount);

    }
    canvas.setAttribute("tabindex",0);
    canvas.addEventListener("keyup",get_up_key,false);
    canvas.addEventListener("mousemove",get_mouse_xy,false);
    canvas.addEventListener("keydown",get_down_key,false);
    canvas.addEventListener("click",get_click,false);
}

key_get();
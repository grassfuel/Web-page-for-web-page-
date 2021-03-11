//　ルーレットの中身
let style = ["1","2","3","4"];
let set =[
                ["a","b","c"],
                ["d","e","f"],
                ["g","h","i"],
                ["j","k","l"],
                ["m","n","o"]
            ];
let subset =[
                ["a","b","c"],
                ["a","b","c"],
                ["a","b","c"],
                ["a","b","c"],
                ["a","b","c"]
            ];
// ルーレット停止のフラグ，もう少し良い方法を模索したい
let count1= true;
let count2= true;
let count3= true;
let count4= true;
let count5= true;
let array_line = 0;

// ルーレット関数，　アニメーションフレームでループする.
function loop(){
    function styleloop(item,asset){
        let i = parseInt(Math.random()*asset.length);
        item.innerHTML = asset[i];
        return i;
    }
    function weponloop(item,asset,line){
        item.innerHTML = asset[line][parseInt(Math.random()*asset[line].length)];
    }
    if(count1){array_line = styleloop(document.getElementById("style"),style);}
    if(count2){weponloop(document.getElementById("wepon1"),set,array_line);}
    if(count3){weponloop(document.getElementById("wepon2"),set,array_line);}
    if(count4){weponloop(document.getElementById("wepon3"),set,array_line);}
    if(count5){weponloop(document.getElementById("wepon4"),set,array_line);}
    requestAnimationFrame(loop);
}
loop()
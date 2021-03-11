//　ルーレットの中身
let style = ["1","2","3","4"];
let set =[
                ["a","b","c"],
                ["a","b","c"],
                ["a","b","c"],
                ["a","b","c"],
                ["a","b","c"]
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


// ルーレット関数，　アニメーションフレームでループする.
function loop(){
    function styleloop(item,asset,line){
        item.innerHTML = asset[parseInt(Math.random()*asset.length)];
    }
    function weponloop(item,asset,line){
        item.innerHTML = asset[1][parseInt(Math.random()*asset[0].length)];
    }
    if(count1){styleloop(document.getElementById("style"),style,0);}
    if(count2){weponloop(document.getElementById("wepon1"),set,0);}
    if(count3){weponloop(document.getElementById("wepon2"),set,0);}
    if(count4){weponloop(document.getElementById("wepon3"),set,0);}
    if(count5){weponloop(document.getElementById("wepon4"),set,0);}
    requestAnimationFrame(loop);
}
loop()
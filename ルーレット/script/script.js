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

let count1= 0;
let count2= 0;
let count3= 0;
let count4= 0;

function switchon(){
    return 1;
}
document.getElementById("wepon1").onclick = switchon();
function loop(){
    function styleloop(item,asset,line){
        item.innerHTML = asset[parseInt(Math.random()*asset.length)];
    }
    function weponloop(item,asset,line){
        item.innerHTML = asset[1][parseInt(Math.random()*asset[0].length)];
    }


    console.log( document.getElementById("wepon1").onclick);
    styleloop(document.getElementById("style"),style,0);
    weponloop(document.getElementById("wepon1"),set,0);
    weponloop(document.getElementById("wepon2"),set,0);
    weponloop(document.getElementById("wepon3"),set,0);
    weponloop(document.getElementById("wepon4"),set,0);
    requestAnimationFrame(loop);
}
loop()
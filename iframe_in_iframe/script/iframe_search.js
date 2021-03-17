function loop(){
    let i=0;
    for(i=0;i<50;i+=1){
        document.getElementById("loo"+i).innerHTML = "<iframe id=\"loo"+i+"\"src=\"lv3\"></iframe>";
    }
}


function search(){
    console.log(document.getElementById("lv1"));
    document.getElementById("out_put_1").innerHTML ="a";
    document.getElementById("out_put_2").innerHTML ="a";
    document.getElementById("out_put_3").innerHTML ="a";
}
window.onload = function(){
    search();
}
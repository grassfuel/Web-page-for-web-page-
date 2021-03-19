function loop(){
    let i=0;
    for(i=0;i<50;i+=1){
        document.getElementById("loo"+i).innerHTML = "<iframe id=\"loo"+i+"\"src=\"lv3\"></iframe>";
    }
}


function search(){
    let i = document.getElementById("lv1");
    console.log(document.getElementById("lv1"));
    console.log(document.getElementById("lv1").innerHTML);
    console.log(document.getElementById("lv1").click);
    console.log(document.getElementById("lv1").classList);
    console.log(document.getElementById("lv1").getAttribute);
    console.log(document.getElementById("lv1").querySelector);
    console.log(document.getElementById("lv1").accessKey);
    console.log(document.getElementById("lv1").accessKeyLabel);
    console.log(document.getElementById("lv1").assignedSlot);
    console.log(document.getElementById("lv1").attributes);
    console.log(document.getElementById("lv1").autocapitalize);
    console.log(document.getElementById("lv1").dir);
    console.log(document.getElementById("lv1").nodeName);
    console.log(document);
    document.getElementById("out_put_1").innerHTML ="a";
    document.getElementById("out_put_2").innerHTML ="a";
    document.getElementById("out_put_3").innerHTML ="a";
}
window.onload = function(){
    search();
}
window.onload = function() {
    countUP = 0;
    cbu = document.getElementById("cbu");
    haikei = document.getElementById("haikei");
    function countup(e){
        if(e.code=="Space"&&e.repeat == false){
            countUP+=1;
            cbu.innerHTML = countUP;
            //cbu.style.backgroundColor="#F60C86";
            haikei.style.width = "100%";
        }
    }
    function cu(e){
        if(e.code=="Space"&&e.repeat == false){
            //cbu.style.backgroundColor="#2E89BA";
            haikei.style.width = "0%";
        }
    }
    cbu.addEventListener("keydown",countup)
    cbu.addEventListener("keyup",cu)
    console.log("読み込み");
}
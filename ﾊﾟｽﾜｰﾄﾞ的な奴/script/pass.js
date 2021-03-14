function pass_set(check,set,success,faile){
    console.log(check.length+","+set.length+","+check.indexOf(set));
    if(check.length == set.length&&check.indexOf(set) != -1){
        success();
    }else{
        faile();
    }
}

function success_pass(){
    document.getElementById("success").innerHTML = "照合成功"
}
function faile_pass(){
    document.getElementById("success").innerHTML = "照合失敗， ヒント:2^10"
}

function get_text(){
    pass_set(document.getElementById("pass").value,"1024",success_pass,faile_pass);
}

function set_enter(){
    textarea = document.getElementById("pass");
    function get_down_key(e){
        if(e.code == "Enter"){get_text();}
    }
    textarea.setAttribute("tabindex",0);
    textarea.addEventListener("keydown",get_down_key,false);
}
set_enter();
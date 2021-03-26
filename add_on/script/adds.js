function add_by_before(){
    document.getElementById("feedback").style.disp = "inline";
}
function add_by_after(){
    document.getElementById("feedback").style.disp = "hide";
}
function add_thumbnail(){

}
function add_close(){
    document.getElementById("feedback").style.disp = "inline";
    document.getElementById("choice").style.disp = "inline";
    document.getElementById("adds_setting").style.disp = "inline";
    document.getElementById("back").style.disp = "inline";

    document.getElementById("hide_content").style.disp = "hide";
    document.getElementById("unsuitable").style.disp = "hide";
    document.getElementById("see_again").style.disp = "hide";
    document.getElementById("not_interested").style.disp = "hide";
}
function add_back(){
    document.getElementById("feedback").style.disp = "hide";
}
function the_choice(){
    document.getElementById("feedback").style.disp = "inline";
    document.getElementById("choice").style.disp = "hide";
    document.getElementById("adds_setting").style.disp = "hide";
    document.getElementById("back").style.disp = "hide";

    document.getElementById("hide_content").style.disp = "inline";
    document.getElementById("unsuitable").style.disp = "inline";
    document.getElementById("see_again").style.disp = "inline";
    document.getElementById("not_interested").style.disp = "inline";
}
console.log("よみ");


function add_by_before(){
    document.getElementById("feedback").style.display = "inline";
}
function add_by_after(){
    document.getElementById("feedback").style.display = "none";
}
function add_thumbnail(){

}
function add_close(){
    document.getElementById("feedback").style.display = "inline";
    document.getElementById("choice").style.display = "inline";
    document.getElementById("adds_setting").style.display = "inline";
    document.getElementById("back").style.display = "inline";

    document.getElementById("none_content").style.display = "none";
    document.getElementById("unsuitable").style.display = "none";
    document.getElementById("see_again").style.display = "none";
    document.getElementById("not_interested").style.display = "none";
}
function add_back(){
    document.getElementById("feedback").style.display = "none";
}
function the_choice(){
    document.getElementById("feedback").style.display = "inline";
    document.getElementById("choice").style.display = "none";
    document.getElementById("adds_setting").style.display = "none";
    document.getElementById("back").style.display = "none";

    document.getElementById("none_content").style.display = "inline";
    document.getElementById("unsuitable").style.display = "inline";
    document.getElementById("see_again").style.display = "inline";
    document.getElementById("not_interested").style.display = "inline";
}
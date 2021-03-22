function save(){
    const text = document.getElementById("text").value;
    document.cookie = "box="+text;
}
function load(){
    console.log(document.cookie);
}
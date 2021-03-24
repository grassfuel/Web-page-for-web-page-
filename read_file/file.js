function read_file(target){
    read = document.getElementById("script");
    file = new FileReader();
    file.readAsText(read,"UTF-8");
}

function change(){
    console.log(document.getElementById("input").value);
}
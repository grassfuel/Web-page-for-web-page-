Clockwise = function(){
    let Time = new Date();
    let PrintT;
    PrintT = Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds();
    document.getElementById("clock_tile").innerHTML = PrintT;
    setInterval(Clockwise, 500);
}
Clockwise();

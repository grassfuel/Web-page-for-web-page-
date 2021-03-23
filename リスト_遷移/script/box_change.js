page_list = [
    [   "<div=\"comment\">なにか</div><br>",
        "<div=\"comment\">書いて</div><br>",
        "<div=\"comment\">置くと</div><br>",
        "<div=\"comment\">ページが</div><br>"],
    [   "<div=\"comment\">変わったとき</div><br>",
        "<div=\"comment\">何かが</div><br>",
        "<div=\"comment\">表示される</div><br>",
        "<div=\"comment\">システムです</div><br>"]
]
page = 0;
function next(){
    page+=1;
    let page_cash = "";
    for(let i=0;i < page_list[page].length;i+=1){
        page_cash = page_cash+=page_list[page][i]
        console.log(i);
    }
    document.getElementById("page").innerHTML = page_cash;
}
function back(){
    page-=1;
    let page_cash = "";
    for(let i=0;i < page_list[page].length;i+=1){
        page_cash = page_cash+=page_list[page][i]
        console.log(i);
    }
    document.getElementById("page").innerHTML = page_cash;
}
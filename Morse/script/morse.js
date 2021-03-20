function morus(){
    let decode_en = {
        "･ｰ":"A",
        "ｰ･･･":"B",
        "ｰ･ｰ･":"C",
        "ｰ･･":"D",
        "･":"E",
        "･･ｰ･":"F",
        "ｰｰ･":"G",
        "････":"H",
        "･･":"I",
        "･ｰｰｰ":"J",
        "ｰ･ｰ":"K",
        "･ｰ･･":"L",
        "ｰｰ":"M",
        "ｰ･":"N",
        "ｰｰｰ":"O",
        "･ｰｰ･":"P",
        "ｰｰ･ｰ":"Q",
        "･ｰ･":"R",
        "･･･":"S",
        "ｰ":"T",
        "･･ｰ":"U",
        "･･･ｰ":"V",
        "･ｰｰ":"W",
        "ｰ･･ｰ":"X",
        "ｰ･ｰｰ":"Y",
        "ｰｰ･･":"Z",

        "･ｰｰｰｰ":"ｰ",
        "･･ｰｰｰ":"2",
        "･･･ｰｰ":"3",
        "････ｰ":"4",
        "･････":"5",
        "ｰ････":"6",
        "ｰｰ･･･":"7",
        "ｰｰｰ･･":"8",
        "ｰｰｰｰ･":"9",
        "ｰｰｰｰｰ":"･",

        "･ｰ･ｰ･ｰ":".",
        "ｰｰ･･ｰｰ":",",
        "ｰｰｰ･･･":":",
        "･･ｰｰ･･":"?",
        "･･ｰｰ･ｰ":"_",
        "･ｰ･ｰ･":"+",
        "ｰ････ｰ":"-",
        "･･････":"^",
        "ｰ･･ｰ･":"/",
        "･ｰｰ･ｰ･":"@",
        "ｰ･ｰｰ･":"(",
        "ｰ･ｰｰ･ｰ":")",
        "･ｰ･･ｰ･":"\"",
        "･ｰｰｰｰ･":"\'"
    }
    let decode_jp = {
        "01":"ｲ",
        "0101":"ﾛ",
        "1000":"ﾊ",
        "1010":"ﾆ",
        "100":"ﾎ",
        "0":"ﾍ",
        "00100":"ﾄ",
        "0010":"ﾁ",
        "110":"ﾘ",
        "0000":"ﾇ",
        "10110":"ﾙ",
        "0111":"ｦ",
        "101":"ﾜ",
        "0100":"ｶ",
        "11":"ﾖ",
        "10":"ﾀ",
        "111":"ﾚ",
        "1110":"ｿ",
        "0110":"ﾂ",
        "1101":"ﾈ",
        "010":"ﾅ",
        "000":"ﾗ",
        "1":"ﾑ",
        "001":"ｳ",

        "0011":"ﾉ",
        "01000":"ｵ",
        "0001":"ｸ",
        "011":"ﾔ",
        "1001":"ﾏ",
        "1011":"ｹ",
        "1100":"ﾌ",
        "1111":"ｺ",
        "10111":"ｴ",
        "01011":"ﾃ",
        "11011":"ｱ",
        "10101":"ｻ",
        "10100":"ｷ",
        "10011":"ﾕ",
        "10001":"ﾒ",
        "00101":"ﾐ",
        "11010":"ｼ",
        "01100":"ｴ",
        "11001":"ﾋ",
        "10010":"ﾓ",
        "01110":"ｾ",
        "11101":"ｽ",
        "01010":"ﾝ",
        "00":"ﾞ",
        "00110":"ﾟ",

        "01101":"-",
        "010101":",",
        "010100":"　",
        "101101":"(",
        "010010":")"
    }
    //マウスクリックの取得 変数 clickに格納
    key = document.getElementById("morus_input");
    let click = false;
    function on_click(){
        click = true;
    }
    function out_click(){
        click = false;
    }
    key.setAttribute("tabindex",0);
    key.addEventListener("mousedown",on_click,false);
    key.addEventListener("mouseup",out_click,false);
    //マウスクリックの押下時間から長短の判別
    let long = 0; //コード長さ判定;
    let interval = 0; //コード間隔;
    let code = "";    //コード
    let text = "";    //コード翻訳後
    function get_code(){
        if(click == true){
            long+=1;
            interval = 0;
        }else{
            if(long != 0){
                if(long < 10){code = code + "･";}
                else{code = code + "ｰ";}
                document.getElementById("morus_status").innerHTML = code;
            }
            long = 0;
            interval += 1;
            if(interval > 60 &&code != ""){
                console.log(code);
                if(decode_en[code] != undefined){
                    text = text + decode_en[code];
                }
                code = "";
                document.getElementById("morus_output").innerHTML = text;
                document.getElementById("morus_status").innerHTML = code;
            }
        }
        requestAnimationFrame(get_code);
    }
    get_code();
}
morus();



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

        "･ｰｰｰｰ":"1",
        "･･ｰｰｰ":"2",
        "･･･ｰｰ":"3",
        "････ｰ":"4",
        "･････":"5",
        "ｰ････":"6",
        "ｰｰ･･･":"7",
        "ｰｰｰ･･":"8",
        "ｰｰｰｰ･":"9",
        "ｰｰｰｰｰ":"0",

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
        "ｰｰ･ｰｰ":"ｱ",
        "･ｰ":"ｲ",
        "･･ｰ":"ｳ",
        "ｰ･ｰｰｰ":"ｴ",
        "･ｰ･･･":"ｵ",
        "･ｰ･･":"ｶ",
        "ｰ･ｰ･･":"ｷ",
        "･･･ｰ":"ｸ",
        "ｰ･ｰｰ":"ｹ",
        "ｰｰｰｰ":"ｺ",
        "ｰ･ｰ･ｰ":"ｻ",
        "ｰｰ･ｰ･":"ｼ",
        "ｰｰｰ･ｰ":"ｽ",
        "･ｰｰｰ･":"ｾ",
        "ｰｰｰ･":"ｿ",
        "ｰ･":"ﾀ",
        "･･ｰ･":"ﾁ",
        "･ｰｰ･":"ﾂ",
        "･ｰ･ｰｰ":"ﾃ",
        "･･ｰ･･":"ﾄ",
        "･ｰ･":"ﾅ",
        "ｰ･ｰ･":"ﾆ",
        "････":"ﾇ",
        "ｰｰ･ｰ":"ﾈ",
        "･･ｰｰ":"ﾉ",
        "ｰ･･･":"ﾊ",
        "ｰｰ･･ｰ":"ﾋ",
        "ｰｰ･･":"ﾌ",
        "･":"ﾍ",
        "ｰ･･":"ﾎ",
        "ｰ･･ｰ":"ﾏ",
        "･･ｰ･ｰ":"ﾐ",
        "ｰ":"ﾑ",
        "ｰ･･ｰ･":"ﾓ",
        "ｰ･･･ｰ":"ﾒ",
        "･ｰｰ":"ﾔ",
        "ｰ･･ｰｰ":"ﾕ",
        "ｰｰ":"ﾖ",
        "･･･":"ﾗ",
        "ｰｰ･":"ﾘ",
        "ｰ･ｰｰ･":"ﾙ",
        "ｰｰｰ":"ﾚ",
        "･ｰ･ｰ":"ﾛ",
        "ｰ･ｰ":"ﾜ",
        "･ｰｰｰ":"ｦ",
        "･ｰ･ｰ･":"ﾝ",

        "･･":"ﾞ",
        "･･ｰｰ･":"ﾟ",

        "･ｰｰ･ｰ":"-",
        "･ｰ･ｰ･ｰ":",",
        "･ｰ･ｰ･･":"　",
        "ｰ･ｰｰ･ｰ":"(",
        "･ｰ･･ｰ･":")"
    }
    const a_context = new AudioContext(); //音の追加
    let shake = a_context.createOscillator();
    shake.connect(a_context.destination);
    //マウスクリックの取得 変数 clickに格納
    key = document.getElementById("morus_input");
    let click = false;
    function on_click(){
        click = true;
        shake.start();
    }
    function out_click(){
        click = false;
        shake.stop();
        shake = a_context.createOscillator();
        shake.connect(a_context.destination);
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
                if(document.getElementById("select_type").value == 0){
                    if(decode_en[code] != undefined){text = text + decode_en[code];}
                }else{
                    if(decode_jp[code] != undefined){text = text + decode_jp[code];}
                }
                code = "";
                console.log(text);
                document.getElementById("morus_output").innerHTML = text;
                document.getElementById("morus_status").innerHTML = code;
            }
        }
        requestAnimationFrame(get_code);
    }
    get_code();
}

morus();





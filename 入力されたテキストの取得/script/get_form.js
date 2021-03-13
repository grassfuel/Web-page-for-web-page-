class text_inf{
    constructor(text){
        this.text = text;
        this.count = this.text.length;
        this.count_textonly = this.text;
        let i = 0;
        for(i=0;i < this.text.length;i+=1){
            this.count_textonly = this.count_textonly.replace("\n","").replace(" ","").replace("　","");
        }
        this.count_textonly = this.count_textonly.length;
    }
}

function get_text(){
    mijikai = new text_inf(document.getElementById("mijikai").value);
    nagai = new text_inf(document.getElementById("nagai").value);
    document.getElementById("out_1").innerHTML = "文字数:" + mijikai.count;
    document.getElementById("out_2").innerHTML = "文字数(改行&空白抜き):" + mijikai.count_textonly;
    document.getElementById("out_3").innerHTML = "文字数:" + nagai.count;
    document.getElementById("out_4").innerHTML = "文字数(改行&空白抜き):" + nagai.count_textonly;
}
const toUpperCase = function (text) {
    var arr;
    arr = text[0].toUpperCase();
    for(var i = 1; i < text.length; i++){
        if(text[i - 1] == ' '){
            arr += text[i].toUpperCase();
        } else {
            arr += text[i].toLowerCase();
        }
    }
    return arr;
};

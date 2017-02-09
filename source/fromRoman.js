/**
 * Created by pacman29 on 10.02.17.
 */
'use strict';
function fromRoman(val) {
    let a = val.split('');
    let b = [];
    for(let i = 0; i<a.length; ++i){
        switch (a[i].toLowerCase()){
            case "i":
                b[i] = 1;
                break;
            case "v":
                b[i] = 5;
                break;
            case "x":
                b[i] = 10;
                break;
            case "l":
                b[i] = 50;
                break;
            case "c":
                b[i] = 100;
                break;
            case "d":
                b[i] = 500;
                break;
            case "m":
                b[i] = 1000;
                break;
        }
    }

    for(let i = 0; i<b.length-1; ++i){
        console.info(b.join());
        if(b[i]<b[i+1]){
            b[i+1] -= b[i];
            b.splice(i,1);
        }
    }
    console.log(b.join());
    let result = 0;
    b.forEach(function (iter,i,arr) {
        result+=iter;
    });
    return result;
}
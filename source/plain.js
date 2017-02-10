function plain(mass){
    var arr =[];
    mass.map(function(value, index){
        arr = arr.concat(value);
    });
    return arr;
}
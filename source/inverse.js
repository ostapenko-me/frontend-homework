const inverse = function (array) {
    if (array.length == 0) {
        return array;
    }

    reversed_subarray = array.splice(1, array.length - 1).reverse();

    return array.concat(reversed_subarray);
};

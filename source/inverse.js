const inverse = function (array) {
    if (!array.length) {
        return array;
    }

    const reversed_subarray = array.splice(1, array.length - 1).reverse();

    return array.concat(reversed_subarray);
};

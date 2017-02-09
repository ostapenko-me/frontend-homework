/**
 * Created by algys on 09.02.17.
 */

const union = function(...arrays) {

    for (let i = 1; i < arrays.length; i++) {
        for (let key in arrays[i]) {
            if(!arrays[0].includes(arrays[i][key])){
                arrays[0].push(arrays[i][key]);
            }
        }
    }

    return arrays[0];
}

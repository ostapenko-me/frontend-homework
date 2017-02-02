'use strict';

const removeDuplicateLettersEnd = function(str) {
	let set = new Set()
	const issetAndCreate = function(el) {
	    if(set.has(el))
		return true
	    else
		set.add(el)
	    
	    return false
	}

	return (str || '').split('').reduceRight(function(sum, el) {
    		if(!issetAndCreate(el))
        		return el + sum; return sum
        }, "")
};

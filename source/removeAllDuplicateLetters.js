const removeAllDuplicateLetters = function (str) {
	let result = str;
	
	for (let i = 0; i < str.length; i++) {
		if(~str.indexOf(str[i], i+1)){	
 	 		result = result.split(str[i]).join('');
 	 	}
	}
	
	return result;
}
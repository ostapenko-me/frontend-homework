'use strict';
//Chernov Andrey
function removeDuplicateLettersBegin(str){
	let strResult="";
	for (let i=0;i<str.length;i++) if(!strResult.includes(str.charAt(i))){ 
		strResult+=str.charAt(i)
	}		
	return strResult;
}
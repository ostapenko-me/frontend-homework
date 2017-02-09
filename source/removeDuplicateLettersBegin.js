'use strict';
//Chernov Andrey
function removeDuplicateLettersBegin(str)
{
	var strResult="";
	var arrayCode=[];	
	for (var i=0;i<str.length;i++){
		var codepoint=str.charCodeAt(i);
		var value=String(arrayCode[codepoint]);
		if(value=="undefined"){
			arrayCode[codepoint]=true;
			strResult+=str.charAt(i);	
		}
	}
	return strResult;
}
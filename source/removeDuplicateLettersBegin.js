'use strict';
//Chernov Andrey
function removeDuplicateLettersBegin(str)
{
	var strResult="";
	for (var i=0;i<str.length;i++) if(strResult.indexOf(str.charAt(i))==-1) strResult+=str.charAt(i)	
	return strResult;
}
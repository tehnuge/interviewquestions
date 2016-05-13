//interleave two strings
function interleave(str1, str2){
	var comLen;
	var result="";
	if (str1.length >= str2.length){
		comLen = str2.length
	}
	else{
		comLen=str1.length
	}
	for(var i =0; i < comLen; i++){
		result = result.concat(str1[i],str2[i])
	}
	if(comLen < str1.length){
		result = result.concat(str1.slice(i,str1.length))
	}
	else if(comLen < str2.length){
		console.log('ran')
		result = result.concat(str2.slice(i,str2.length))
	}
	return result
}

//interleave("dog", "cat")
interleave("abc", "1234567")
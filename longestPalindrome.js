//finds longest palindrome substring

//helper function for returning if palindrome
function isPal(word){
	var left = 0
	var right = word.length - 1
	while (left < right){
		if(word[left++]!== word[right--]){
			return false
		}
	}
	return true
}

function longestPal(str){
	var maxLen = 1;
	var current
	for(var i = 0; i < str.length; i++){
		for (var j = str.length; j >=0; j--){
			current = str.slice(i,j)
			if(isPal(current)){
				//console.log("curlength: "+current.length)
				if(current.length > maxLen){
					maxLen=current.length
					//console.log("maxlen upda: "+ maxLen)
				}
			}
		}
	}
	return maxLen
}
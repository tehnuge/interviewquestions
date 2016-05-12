//function that finds the longest sequence of consecutive numbers in an array
function find_seq(arr){
	if(arr.length === 1){
		return 1
	}
	var maxLen = 1
	var current = arr[0]
	var curLen = 1
	for(var i = 1; i < arr.length; i++){
		if(arr[i] === current){
			curLen++
		}
		if(curLen > maxLen){
			maxLen = curLen
		}
		if(arr[i]!==current){
			current = arr[i]
			curLen = 1
		}
	}
	return maxLen
}
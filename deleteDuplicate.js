//given a list of key values in a string, delete the duplicates and retain the entries with the longest values
function deleteDuplicates(str){
	var list =str.split('\n')
	var result = {}
	for(var i =0; i< list.length; i++){
		var temp = list[i].match(/\d+/)
		var val = list[i].match(/[a-z]+/)
		console.log(val)
		//console.log("i:" + i + " " + val.length)
		if(result[temp] === undefined || val[0].length > result[temp][0].length){			
			result[temp] = val	
			console.log("i:" + i + " " + result[temp][0].length)
			//console.log(val)
		}
	}
return result
}

deleteDuplicates("12312415:apple\n324324234:orange\n12312415:applet, dfasd")
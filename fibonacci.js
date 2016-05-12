//calculates fibonacci sequence for number
function fibonacci(n){
	if( n < 0){
		throw 'number has to be greater than 0'
	}
	if(n === 0){
		return 0
	}
	if(n === 1){
		return 1
	}
	return fibonacci(n-1) + fibonacci(n - 2)
}
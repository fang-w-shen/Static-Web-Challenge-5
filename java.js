var x = [1,1];
function fibo() {
	for (var i = 0; x[x.length-1] < 500; i++) {
		if (y >500) {
			x.pop();
		}
		else {
		var y = x[i]+x[i+1];
		x.push(y);
	}
	}
	x.pop();
	console.log("", x);
		
}
fibo();
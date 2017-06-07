var count = -10;

console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
while (count <= 19) {
	console.log(count);
	count++;
}

var evenNum = 10;

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
while(count <= 40) {
	console.log(count);
	count+=2;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 and 333");
var oddNum = 300;
while(oddNum < 334) {
	console.log(oddNum);
	oddNum+=3;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var divisibleNum = 5;
while (divisibleNum < 51){
	if (divisibleNum % 5 === 0 && divisibleNum % 3 === 0) {
		console.log(divisibleNum);
	}
	divisibleNum++;
}

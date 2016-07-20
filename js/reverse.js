var inputString = 'building';

var myArray = [];

myArray = inputString.split('');

var reversedArray = [];

for(var i = 8; i >= 0; i--){

	reversedArray.push(myArray[i]);	
	//debug(reversedArray);

}

debug(reversedArray.join(''));
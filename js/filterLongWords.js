
var maxLength = 5;

var arrayOfWords = ["cat", "tiger", "elephant"];

var newArray = [];

for(var i = 0; i < arrayOfWords.length; i++){
	
	if(arrayOfWords[i].length < maxLength){
		newArray.push(arrayOfWords[i]);
		debug(maxLength);
		debug(newArray);
	} 
}